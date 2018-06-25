import React, { Component } from 'react'
import NumberInput from '../NumberInput'
import ResultDisplay from '../ResultDisplay'
import './style.scss'

class App extends Component {
  state = { number: 1989 }

  onNumberChange = number => {
    this.setState({ number })
  }

  render() {
    return (
      <div id="app-container">
        <div>
          <NumberInput
            onChange={this.onNumberChange}
            defaultValue={this.state.number}
          />
        </div>
        <div>
          <ResultDisplay number={this.state.number} />
        </div>
      </div>
    )
  }
}

export default App
