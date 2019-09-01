import React from 'react';
import './App.css';
//引入history
import createHashHistory from 'history/createHashHistory'
//引入eventProxy
import './eventProxy'
import Component1 from './Component1'
import Component2 from './Component2'

const history = createHashHistory()

class App extends React.Component {

  constructor() {
    super()

    this.state={

    }
  }
  



  render(){
    return (
      <div className="App">       
        <Component1 />
        <Component2 />
      </div>
    )
  }
}

export default App;
