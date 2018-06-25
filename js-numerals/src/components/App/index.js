import React from 'react'
import NumberInput from '../NumberInput'
import ResultDisplay from '../ResultDisplay'
import './style.scss'

export default () => (
  <div id="app-container">
    <div>
      <NumberInput />
    </div>
    <div>
      <ResultDisplay />
    </div>
  </div>
)
