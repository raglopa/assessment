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
    this.props.onChange(value)
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
          placeholder="your favourite number"
        />
      </div>
    )
  }
}

export default NumberInput
