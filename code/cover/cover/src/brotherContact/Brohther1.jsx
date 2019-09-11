import React, { Component } from 'react'

class Brother1 extends Component {
  constructor() {
    super()

    this.state = {

    }

  }

  componentDidMount() {
    this.props.init && this.props.init(this)
}

  handleClick = () => {
    console.log('输出看看就知道了!')
  }

  render() {
    return (
      <div>
        1
      </div>
    )
  }
}
export default Brother1