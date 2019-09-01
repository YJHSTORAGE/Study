import React from 'react';
import SingleAdd from './SingleAdd';
import SingleShow from './SingleShow';
import NotChange from './NotChange';

class SingleResponsibility extends React.Component {
  constructor() {
    super()

    this.state={
      message:''
    }
  }

  render(){
    const { message } =this.state
    return (
      <div className="singleResponsibility">
        <h1>react组件设计的七个准则之组合和复用——单一职责</h1>
        <hr />
        <SingleAdd state={ this.state } />
        <SingleShow showMessage={ message } />
        <NotChange />
      </div>
    )
  }
}

export default SingleResponsibility;
