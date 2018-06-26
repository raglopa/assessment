import { numberGroups } from './config'
import spellThreeDigitNumber from './spell-three-digit-number'

const numberReducer = (acc, curr, i) => [
  ...acc,
  {
    label: curr,
    divider: Math.pow(1000, i)
  }
]

const numberMap = n => (group, i, array) => {
  const number = n % (group.divider * 1000)
  const value = number >= group.divider ? parseInt(number / group.divider) : 0
  const shouldAddConjunction =
    group.label === '' && value < 100 && array.length > 1
  return value
    ? `${shouldAddConjunction ? 'and ' : ''}${spellThreeDigitNumber(value)} ${
        group.label
      }`
    : ''
}

const spellLargeNumber = number =>
  numberGroups
    .reduce(numberReducer, [])
    .reverse()
    .map(numberMap(number))
    .filter(s => s)
    .join(' ')
    .trim()

export default number => {
  const n = parseInt(number)
  return n < 2000 ? spellThreeDigitNumber(n) : spellLargeNumber(n)
}
