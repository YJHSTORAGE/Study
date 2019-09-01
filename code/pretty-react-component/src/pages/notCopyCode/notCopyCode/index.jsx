import React from 'react';
import { Input, Button } from 'antd';
import { message } from 'antd'


class NotCopyCode extends React.Component {
  constructor() {
    super()

    this.state={
      message:''
    }
  }


 handleChange =( e ) => {
   let value = e.target.value
   //可以有很多的操作，这里就用个字符串判断操作
   
   this.validationDate(value)
 }

 handleClick = () => {
   let value="被点击了"
   this.validationDate( value )
   setTimeout( () => {
     message.success('相同代码不copy')
   },1000)
 }
 
 validationDate = ( value ) => {
  value = value===""?'输入数据':value
  this.setState({
    message:value
  })
 }

  render(){
    const { message } = this.state
    return (
      <div className="NotCopyCode">
        <h1>可靠react组件之-not copy code</h1>
        <hr />
        <Input placeholder="输入数据" value={ message } onChange={ this.handleChange } />
        <Button type="primary" onClick={ this.handleClick }>添加</Button>
        <hr />
        数据是{ message }
      </div>
    )
  }
}

export default NotCopyCode;
