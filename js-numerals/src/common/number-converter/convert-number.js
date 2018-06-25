import { baseNumbers, numberGroups } from './config'

const createNumberSpeller = baseNumbers => {
  const spellBaseNumber = number => baseNumbers[number].spell

  const spellGeneralTwoDigitNumber = number => {
    const tens = parseInt(number / 10)
    const base = number % 10
    return `${baseNumbers[tens].tens}${
      base > 0 ? '-' + spellBaseNumber(base) : ''
    }`
  }

  const spellTwoDigitNumber = number =>
    number < 20 ? spellBaseNumber(number) : spellGeneralTwoDigitNumber(number)

  const spellThreeDigitNumber = number => {
    let spelled = ''
    if (number === 0) {
      spelled = spellBaseNumber(number)
    } else {
      const hundreds = parseInt(number / 100)
      const remains = number % 100
      const spelledHundreds = hundreds
        ? `${spellTwoDigitNumber(hundreds)} hundred`
        : ''
      const spelledTens = remains > 0 ? spellTwoDigitNumber(remains) : ''
      const and = spelledTens && spelledHundreds ? 'and' : ''

      spelled = [spelledHundreds, and, spelledTens].filter(i => i).join(' ')
    }
    return spelled
  }

  const createNumberObj = (number, numberGroups) =>
    numberGroups
      .map(group => {
        const _number = number % group.remainer
        const value =
          _number >= group.divider ? parseInt(_number / group.divider) : 0
        return {
          ...group,
          number,
          value,
          spelled: `${spellThreeDigitNumber(value)} ${group.label}`
        }
      })
      .filter(group => group.value > 0)

  const withAnd = numberConfig => {
    let number = [...numberConfig]
    const hundredPart = numberConfig.find(g => g.id === 'hundred')
    const shouldAddConjunction =
      hundredPart && hundredPart.value < 100 && numberConfig.length > 1

    if (shouldAddConjunction) {
      const newHundredPart = {
        ...hundredPart,
        spelled: `and ${hundredPart.spelled}`
      }
      number = [...numberConfig.slice(0, -1), newHundredPart]
    }
    return number
  }

  const spell = numberObj =>
    numberObj
      .map(group => group.spelled)
      .join(' ')
      .trim()

  const spellLargeNumber = (number, numberGroups) => {
    let numberObj = createNumberObj(number, numberGroups)
    numberObj = withAnd(numberObj)
    return spell(numberObj)
  }

  return number =>
    number < 2000
      ? spellThreeDigitNumber(number)
      : spellLargeNumber(number, numberGroups)
}

export default createNumberSpeller(baseNumbers)
