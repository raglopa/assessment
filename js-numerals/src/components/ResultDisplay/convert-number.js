const numberTable = {
  0: {
    spell: 'zero'
  },
  1: {
    spell: 'one'
  },
  2: {
    spell: 'two',
    tens: 'twenty'
  },
  3: {
    spell: 'three',
    alt: 'thir',
    tens: 'thirty'
  },
  4: {
    spell: 'four',
    tens: 'forty'
  },
  5: {
    spell: 'five',
    alt: 'fif',
    tens: 'fifty'
  },
  6: {
    spell: 'six',
    tens: 'sixty'
  },
  7: {
    spell: 'seven',
    tens: 'seventy'
  },
  8: {
    spell: 'eight',
    alt: 'eigh',
    tens: 'eighty'
  },
  9: {
    spell: 'nine',
    tens: 'ninety'
  },
  10: {
    spell: 'ten'
  },
  11: {
    spell: 'eleven'
  },
  12: {
    spell: 'twelve'
  }
}

const createNumberSpeller = config => {
  const spellNamedNumber = number => config[number].spell
  const spellNamedNumberAlt = number => config[number].alt
  const spellTens = number => config[number].tens

  const spellUnder20 = number => {
    const base = number % 10
    return `${spellNamedNumberAlt(base) || spellNamedNumber(base)}teen`
  }

  const spellOtherTwoDigits = number => {
    const tens = parseInt(number / 10)
    const base = number % 10
    const spelled = `${spellTens(tens)}${
      base > 0 ? '-' + spellNamedNumber(base) : ''
    }`
    return spelled
  }

  const spellUnder100 = number => {
    let spelled = ''
    if (number < 13) {
      spelled = spellNamedNumber(number)
    } else if (number < 20) {
      spelled = spellUnder20(number)
    } else if (number < 100) {
      spelled = spellOtherTwoDigits(number)
    }
    return spelled
  }

  const spellUnder1000 = number => {
    let spelled = ''
    if (number === 0) {
      spelled = spellNamedNumber(0)
    } else {
      const hundreds = parseInt(number / 100)
      const other = number % 100
      const spelledHundreds = hundreds
        ? `${spellUnder100(hundreds)} hundred`
        : ''
      const spelledTens = other > 0 ? spellUnder100(other) : ''
      const and = spelledTens && spelledHundreds ? 'and' : ''

      spelled = [spelledHundreds, and, spelledTens].filter(i => i).join(' ')
    }
    return spelled
  }

  return {
    spellNamedNumber,
    spellUnder20,
    spellOtherTwoDigits,
    spellUnder100,
    spellUnder1000
  }
}

const numberSpeller = createNumberSpeller(numberTable)

const convertNumber = number => {
  let spelled = ''
  const numberGroups = [
    {
      name: 'billion',
      divider: 1000000000
    },
    {
      name: 'million',
      divider: 1000000
    },
    {
      name: 'thousand',
      divider: 1000
    },
    {
      name: '',
      divider: 1
    }
  ]

  if (number === 0) {
    spelled = numberSpeller.spellNamedNumber(number)
  } else if (number < 2000) {
    spelled = numberSpeller.spellUnder1000(number)
  } else {
    let processedNumber = numberGroups
      .map(group => {
        const _number = number % (group.divider * 1000)
        const value =
          _number >= group.divider ? parseInt(_number / group.divider) : 0
        return {
          ...group,
          number,
          number_: number % (group.divider * 1000),
          value,
          spelled: `${numberSpeller.spellUnder1000(value)} ${group.name}`
        }
      })
      .filter(group => group.value > 0)

    const h = processedNumber.find(g => g.name === '')

    if (h && h.value < 100 && processedNumber.length > 1) {
      const mh = { ...h, spelled: `and ${h.spelled}` }

      processedNumber = [...processedNumber.slice(0, -1), mh]
    }

    spelled = processedNumber
      .map(group => group.spelled)
      .join(' ')
      .trim()
  }

  return spelled
}

export default convertNumber
