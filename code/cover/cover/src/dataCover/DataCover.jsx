import React from 'react'

class DataCover extends React.Component {

  constructor() {
    super()

    this.state = {

    }

  }

  render() {
    const { showType='bianyan' } = {opt:'1'}
    return (
      <div>
        {showType}
      </div>
    )
  }
}
export default DataCover