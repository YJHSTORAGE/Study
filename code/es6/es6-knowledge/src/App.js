import React from 'react';
import { Input, Button } from 'antd';

class  App extends React.Component {

  constructor() {
    super()

    this.state={
      startValue:0,
      endValue:0.00
    }
  }

  handleClick = () => {
    const { startValue } = this.state
    console.log('handleClick')
    this.setState({
      endValue:Number(startValue).toFixed(2)
    })
  }

  handleChange = ( e ) =>{
    console.log(e.target.value)
    this.setState({
      startValue:e.target.value
    })
  }

  render() {
    const { endValue } = this.state
    return (
      <div className="App">
        <Input onChange ={ this.handleChange }/>
        <Button onClick ={ this.handleClick }>按我</Button>
        <Input value={ endValue } />
      </div>
    )  
  }

}
export default App;
