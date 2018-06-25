import React from 'react'
import './style.scss'

import convertNumber from './convert-number'

export default ({ number }) => {
  const convertedNumber = convertNumber(number)
  return <div id="result-display">{convertedNumber}</div>
}
