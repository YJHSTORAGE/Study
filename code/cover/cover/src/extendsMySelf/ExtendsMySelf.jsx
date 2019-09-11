import React from 'react'

class ExtendsMySelf extends React.Component {

  constructor() {
    super()

    this.state = {

    }

  }

  handleClick = () =>{
    console.log('我是祖先中的handleClick')
  }

}
export default ExtendsMySelf