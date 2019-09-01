import React from 'react';
import { Input, Button } from 'antd';

class SingleAdd extends React.Component {

  constructor() {
    super()

    this.state={
      showMessage:''
    }
  }

  handleClick = () => {
    const { state } = this.props
    const { showMessage } = this.state
    state.message = showMessage
    this.setState({
      showMessage:''
    })
  }


  handleChange = ( e ) => {
    this.setState({
      showMessage:e.target.value
    })
  }

  render(){
    const { showMessage } = this.state
    return (
      <div className="SingleAdd">
        <h2>只负责添加数据</h2>
        <Input placeholder="输入你想输入的数据" value={ showMessage } onChange={ this.handleChange }/>
        <Button  onClick={ this.handleClick } > 添 加 </Button>
      </div>
    )
  }
}

export default SingleAdd;
