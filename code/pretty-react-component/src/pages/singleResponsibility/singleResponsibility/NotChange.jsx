import React from 'react';

class NotChange extends React.Component {

  constructor () {
    super()
  }

  componentWillMount() {
    console.log('Component NotChange WillMount')
  }

  componentDidUpdate() {
    console.log('Component NotChange Didupdate')
  }
  
  render(){
    return (
      <div className="NotChange">
        <h2>不做任何修改的部分</h2>
      </div>
    )
  }
}

export default NotChange;
