import React from 'react'
import ExtendsMySelf from './ExtendsMySelf'

class NewButton extends ExtendsMySelf {
  constructor() {
    super()

    this.state = {

    }

  }

  render() {
    return (
      <div>
        <span onClick={this.handleClick}>测试</span>
      </div>
    )

  }
}
export default NewButton