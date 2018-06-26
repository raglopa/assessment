import React from 'react'
import './style.scss'

import convertNumber from '../../common/number-converter/convert-number'

export default ({ number }) => {
  const convertedNumber = convertNumber(number)
  console.log('number', number, convertedNumber)
  return <div id="result-display">{convertedNumber}</div>
}
