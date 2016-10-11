import React, { Component } from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/javascript/javascript'
import './App.css'

const DEFAULT_VALUE = `
function main(req, res) {
  res.send({ result: "ok" })
}
`

class App extends Component {

  constructor() {
    super()
    this.state = {
      code: DEFAULT_VALUE,
    }
  }

  updateCode(newCode) {
    console.log(newCode)
    this.setState({
      code: newCode,
    })
  }

  render() {
    let options = {
      lineNumbers: true,
      mode: "javascript",
      theme: "monokai"
    }
    return (
      <div className="App">
        <div className="App-header">
          <h1>Functions Explorer</h1>
        </div>
        <div className='code-wrapper'>
          <Codemirror value={this.state.code} options={options} onChange={this.updateCode.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App
