import React, { Component } from 'react'
import AceEditor from "react-ace";

import 'brace/theme/github'
import "brace/mode/json"
import "brace/ext/searchbox"

class App extends Component {

onChange = (newValue) =>{
  console.log("change", newValue);
}

render() {
  return (
    <AceEditor
    mode="json"
    theme="github"
    onChange={this.onChange}
  />
  )
}
}
export default App
