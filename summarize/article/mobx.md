#							Mobx自我理解

### 前言

​	最近在公司工作的时候，接手了一个新的项目，项目中使用到了mobx技术栈，下面我来聊聊这段时间我学到的关于mobx的知识。

​	首先mobx 是一个非常优雅的状态管理库，具有相当大的自由度，并且使用非常简单，这也是在项目交接，我问同事为什么使用mobx而不使用redux的时候她给我的理由。

---



###核心组成

​	作为一个轻量级的状态管理库，mobx主要有以下几个核心部分组成。

####State(状态)

​	状态是驱动应用的数据。react和jquery等框架最大的区别就在于，react有自己对于数据的管理方式，react中只允许数据单向流动，而且自顶向下。然后通过关注这些状态的变化来决定组建的变化。这里可以给一个小小的公式以供参考——UI = Reader(State)。这个设计的合理之处在于，我们现在只需要关注state的变化就可以知道UI会怎么变化，而且想要修改UI，也只需要修改state就可以实现。但是，这种单向且自顶向下的数据流设计，也带来了弊端，当应用逐渐强大，功能慢慢变多之后，数据流的需求变大，自顶向下的层级也变多了，原生react通过props传递的方式已经变得十分复杂，维护成本就更高了，这就是mobx、redux等需要解决的问题和使命。

---

####Derivations(衍生)

MobX 区分了两种类型的衍生:

- **Computed values(计算值)** - 它们是永远可以使用纯函数(pure function)从当前可观察状态中衍生出的值。什么意思呢？举个例子方便理解。假如你现在有十块钱，放在一个口袋里，现在我们就把你这个口袋当作是一个state，就在刚刚，你买了一根雪糕，花了四块钱，那么根据你的state我就可以推算出你现在还有六块钱，你可以买4支1.5元的笔等等操作，这些是不变的，可以预测到的，无论是今天还是明天，你只要给定我这些条件，我就可以计算出相同的答案。同样的，计算值也是这个道理，无论什么情况下，相同的条件计算出来的一定是相同的结论，这就是纯函数的特点。

- **Reactions(反应)** - Reactions 是当状态改变时需要自动发生的副作用。或者说得更明确一些，它们最终都需要实现I / O 操作。这里也附带一个例子方便理解。现在咱们国家提倡反腐倡廉，政府接受民众监督，那么人民最关心的莫过于政府部门钱花哪去了，还剩多少之类的问题，所以呢，政府每一次花了钱，计算还剩多少之类的展示出来，这就是I/O操作，I/O操作不会改变state，因为我说一句我还有十块钱，口袋了不会少一毛钱。

  ---

####Actions(动作)

​	是任意一段可以改变state的代码。用户事件、后端数据推送、预定事件等等。 和redux最大的区别就在于，mobx在这里的操作极其的简单，和我们原生react的事件操作几乎一摸一样，没有redux那么繁琐的dispatch操作。

---

####使用mobx需要注意

**1.**

![Action, State, View](https://cn.mobx.js.org/images/action-state-view.png)

​	看到这个，react的支持者一定会很熟悉，这不就是我们所追求的——只关心state。state决定Views吗？是的，mobx同样支持数据单向流动，也就是action改变state，而状态的改变会更新所有受影响的views。

**2.**

​	之前已经介绍，react的两种衍生状态，无论是哪一种，当state变化的时候，所有衍生都会自动同步更新。自动我们都知道是什么意思，就是不需要指令调用，而是自发的执行，那么同步又是什么意思呢？同步的意思可以理解为，当state状态改变之后，其他衍生状态也同一时间改变，这样一来，我们可以在action改变state之后，直接使用衍生值，这是很安全的。

---

###原理

​	上面已经说到了mobx的核心组成部分，接下来说说mobx的原理，他是如何做到我们想要的数据流管理的。

####定义状态并使其可观察(state)

​	可以用任何你喜欢的数据结构来存储状态，如对象:数组、类。 举个例子：

​	import {observable} from 'mobx';

​	var appState = observable({
​    	timer: 0
​	});

appStore.resetTimer() {

​	this.timer++

}

​	这里很简单的定义了一个appState的可观察状态。他是一个对象，又一个timer属性并且初始化为0,有一个方法修改timer属性，每次加1。

####创建视图以响应状态的变化(views)

​	我们都知道，前端就是在和用户交互，而交互最主要的就是信息了，在又了可观察的状态之后，我们就可以将这些状态或者和状态有关的信息展示出来。举个例子：

import {observer} from 'mobx-react';

@observer
class TimerView extends React.Component {
    render() {
        return (

​				{this.props.appState.timer}
​        )
​    }

};

ReactDOM.render(<TimerView appState={appState} />, document.body);

​	现在TimerView组建已经引入了appStore，并且里面的对timer属性进行了展示。这就是响应state变化的视图（view），当然还可以更加的复杂。

####更改状态(action)

​	如果只是展示state，那么这并不是我们想要的，我们最在乎的除了展示，还应该有修改。更改state的任务就交给action来处理。

import {observer} from 'mobx-react';

@observer
class TimerView extends React.Component {
    render() {
        return (

​				{this.props.appState.timer}

​				<button  onClick={ this.onClick }>

​        )
​    }



​	onClick = () => {

​	this.props.appStore.resetTimer()

}

};

ReactDOM.render(<TimerView appState={appState} />, document.body);

​	每次点击button，都会调用appStore中的resetTimer方法，该方法就会修改appStore中的timer属性，每次进行加1操作。最后的结果又会在视图上得到展示。

#### 原理图

![MobX unidirectional flow](https://cn.mobx.js.org/flow.png)

​	解释一波。其实根据前面的介绍，我们已经知道了，mobx通过observable定义可观察的state，然后创建view进行展示，在view中可以通过交互action更改state，然后更新view。

​	那么，在mobx原理内部，这些是怎么实现的呢？

​	其实，每次我们在定义状态并使其可视化的时候，会进行一系列的操作。与此相关的有 Observable 和 Derivation 两个类。Observable 是数据源，Derivation 是推导。

类定义如下：

Observable

- observing: [Derivation]
- get()
- set()

Derivation

- observing: [Derivation]

然后，autorun执行的步骤是这样的：

1. 生成一个 Derivation
2. 执行传入函数，计算出 observing
   1. 怎么计算? 访问数据时会走到 Observable 的 get() 方法，通过 get() 方法做的记录
3. 在 observing 的 Observable 的 observer 里添加这个 Derivation

到这里，Observable 和 Derivation 的依赖关联就建立起来了。

​	那么 `counter.set()` 执行之后是如何触发 `autorun` 自动执行? 在有了上面这一层依赖关系之后，这个就很好理解了。`counter.set()` 执行时会从自己的 observing 属性里取依赖他的 Derivation，并触发他们的重新执行。

### 使用

​	知道了组成，了解了原理，接下来就可以开开心心的讲它运用到项目中去了，这里来一个简单的例子。

####store文件

import { observable } from 'mobx';

export default appState = observable({

  count: 0,

});

appState.increment = function() {

  this.count ++;

};

appState.decrement = function() {

  this.count --;

};

#### app 文件

import { observer } from 'react-mobx';

import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import appStore from './appStore'



@observer

class Count extends Component {

  render() {

​    return (< div >

​      Counter: { appState.count } < br />

  < button onClick={this.handleInc} > + < /button >

​      < button onClick={this.handleDec} > - < /button >

​    < /div >);

  }

  handleInc() {

​    appState.increment();

  }

  handleDec() {

​    appState.decrement();

  }

}

ReactDOM.render(<Count appStore={ appStore }  />, document.getElementById('root'));

###参考文献

mobx中文文献。 链接：https://cn.mobx.js.org/

mobx原理。 链接：https://github.com/sorrycc/blog/issues/3