import React from 'react';
//引入eventProxy
import './eventProxy'


class Component2 extends React.Component {

  constructor() {
    super()

    this.state = {

    }
  }

  handleClick = () => {
    window.EventProxy.trigger('filterNode', '123')
  }

  render() {
    return (
      <div className="App">
        <h1>组件1</h1>
        <button onClick={this.handleClick}>按我</button>
      </div>
    )
  }
}

export default Component2;
