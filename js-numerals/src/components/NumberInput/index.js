import React, { Component } from 'react'
import './style.scss'

class NumberInput extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.defaultValue }
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ value })
  }

  submit = () => {
    this.props.onChange(this.state.value)
  }

  render() {
    return (
      <div id="number-input">
        <input
          type="number"
          min="0"
          step="1"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.submit}>convert</button>
      </div>
    )
  }
}

export default NumberInput
