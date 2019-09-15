import React from 'react'

class LocalStorage extends React.Component {

  constructor() {
    super() 

    this.state = {

    }

  }

  componentWillMount() {
    let addConfig = localStorage.getItem('addConfig')
    console.log(addConfig)
  }

  handleClick = () =>{
    let addConfig = JSON.parse(localStorage.getItem('addConfig')) || []
    addConfig.push( {name:'配置文件1',code:'sdasdadasdedasdedasdewdasdasdwsdasdasd'})
    localStorage.setItem('addConfig',JSON.stringify(addConfig))
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        测试
      </div>
    )
  }
}
export default LocalStorage