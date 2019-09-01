import React from 'react';

class SingleShow extends React.Component {
  constructor() {
    super()
  }
  render(){
    const { showMessage } = this.props
    return (
      <div className="SingleShow">
        <h2>只负责展示数据{ showMessage }</h2>
      </div>
    )
  }
}

export default SingleShow;
