import React from 'react';
//引入eventProxy
import './eventProxy'


class Component1 extends React.Component {

  constructor() {
    super()

    this.state={

    }
  }
  

  componentDidMount() {

    window.EventProxy.on('filterNode', (filterNode) => {  
      console.log(filterNode)
    })
  }

  render(){
    return (
      <div className="App">
        <h1>组件1</h1>
      </div>
    )
  }
}

export default Component1;
