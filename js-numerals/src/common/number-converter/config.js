export const baseNumbers = {
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
    tens: 'thirty'
  },
  4: {
    spell: 'four',
    tens: 'forty'
  },
  5: {
    spell: 'five',
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
  },
  13: {
    spell: 'thirteen'
  },
  14: {
    spell: 'fourteen'
  },
  15: {
    spell: 'fifteen'
  },
  16: {
    spell: 'sixteen'
  },
  17: {
    spell: 'seventeen'
  },
  18: {
    spell: 'eighteen'
  },
  19: {
    spell: 'nineteen'
  }
}

export const numberGroups = [
  {
    label: 'billion',
    id: 'billion',
    divider: 1000000000,
    remainer: 1000000000 * 1000
  },
  {
    label: 'million',
    id: 'million',
    divider: 1000000,
    remainer: 1000000 * 1000
  },
  {
    label: 'thousand',
    id: 'thousand',
    divider: 1000,
    remainer: 1000 * 1000
  },
  {
    id: 'hundred',
    label: '',
    divider: 1,
    remainer: 1 * 1000
  }
]
