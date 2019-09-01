import React from 'react';
import { Input, Button } from 'antd';


class SingleResponsibility extends React.Component {
  constructor() {
    super()

    this.state={
      message:''
    }
  }

  handleClick = () => {
    console.log('click Button')
  }

  componentWillMount = () => {
    console.log('ComponentWillMount')
  }

  componentDidUpdate = () => {
    console.log('ComponentDidUpdate')
  }

  handleChange = ( e ) => {
    this.setState({
      message:e.target.value
    })
  }

  render(){
    const { message } =this.state
    return (
      <div className="singleResponsibility">
        <h1>react组件设计的七个准则之组合和复用——单一职责</h1>
        <hr />
        <Input placeholder="输入添加的数据" value = { message } onChange={ this.handleChange } />
        <Button onClick={ this.handleClick }>添加</Button>
        <hr />
        { message }
        <hr />
        <span>始终不变的地方</span>
      </div>
    )
  }
}

export default SingleResponsibility;
