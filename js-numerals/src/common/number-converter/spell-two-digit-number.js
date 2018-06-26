import { baseNumbers, tenNumbers } from './config'

/**
 * Spells a two digit number.
 * e.g. 42 == 'forty-two'
 */
export default number => {
  const tens = parseInt(number / 10)
  const base = number % 10
  return number < 20
    ? baseNumbers[number]
    : `${tenNumbers[tens]}${base > 0 ? '-' + baseNumbers[base] : ''}`
}
