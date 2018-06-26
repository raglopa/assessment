import { baseNumbers } from './config'
import spellTwoDigitNumber from './spell-two-digit-number'

/**
 * Spells a number like a three digit number.
 * e.g. 642 == 'six hundred and forty-two'
 *      1642 == 'sixteen hundred and forty-two'
 */
export default number => {
  let spelled = ''
  if (number === 0) {
    spelled = baseNumbers[number]
  } else {
    const hundreds = parseInt(number / 100)
    const remains = number % 100
    const spelledHundreds = hundreds ? `${baseNumbers[hundreds]} hundred` : ''
    const spelledTens = remains > 0 ? spellTwoDigitNumber(remains) : ''
    const and = spelledHundreds && spelledTens ? 'and' : ''
    spelled = [spelledHundreds, and, spelledTens].filter(i => i).join(' ')
  }

  return spelled
}
