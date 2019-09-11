import React from 'react'

import Brother1 from './Brohther1'
import Brother2 from './Brother2'

class BrotherContact extends React.Component {

  constructor() {
    super()

    this.state = {

    }

  }


  render() {
    return (
      <div>
        <button type="button" onClick={() =>this.Brother1.handleClick()}>测试</button>
        <Brother1 init={inf => this.Brother1 = inf} />
        <Brother2 />
      </div>
    )
  }
}
export default BrotherContact