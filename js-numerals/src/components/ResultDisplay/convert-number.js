/*
CHEAT-SHEET

1     one
2     two
3     three
4     four
5     five
6     six
7     seven
8     eight
9     nine
10    ten
11    eleven
12    twelve
13    thirteen
14    fourteen
15    fifteen
16    sixteen
17    seventeen
18    eighteen
19    nineteen
20    twenty
*/

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
    tens: 'fourty'
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
    spell: 'twelwe'
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

  return {
    spellNamedNumber,
    spellUnder20,
    spellOtherTwoDigits,
    spellUnder100
  }
}

const numberSpeller = createNumberSpeller(numberTable)

const convertNumber = number => {
  const hundreds = parseInt(number / 100)
  let spelled = numberSpeller.spellUnder100(number)

  return spelled
}

export default convertNumber
