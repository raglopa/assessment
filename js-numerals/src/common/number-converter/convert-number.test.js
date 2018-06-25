import convertNumber from './convert-number'

describe('convertNumber', () => {
  test('should exist', () => {
    expect(convertNumber).toBeDefined()
  })

  test('should return empty string when not convertible', () => {
    expect(convertNumber()).toEqual('')
    expect(convertNumber('string')).toEqual('')
  })

  const namedNumbers = [
    {
      number: 0,
      expected: 'zero'
    },
    {
      number: 1,
      expected: 'one'
    },
    {
      number: 2,
      expected: 'two'
    },
    {
      number: 3,
      expected: 'three'
    },
    {
      number: 4,
      expected: 'four'
    },
    {
      number: 5,
      expected: 'five'
    },
    {
      number: 6,
      expected: 'six'
    },
    {
      number: 7,
      expected: 'seven'
    },
    {
      number: 8,
      expected: 'eight'
    },
    {
      number: 9,
      expected: 'nine'
    },
    {
      number: 10,
      expected: 'ten'
    },
    {
      number: 11,
      expected: 'eleven'
    },
    {
      number: 12,
      expected: 'twelve'
    }
  ]

  namedNumbers.forEach(item => {
    test(`should convert named numbers correctly: '${item.number}'`, () => {
      expect(convertNumber(item.number)).toEqual(item.expected)
    })
  })

  const under20Numbers = [
    {
      number: 13,
      expected: 'thirteen'
    },
    {
      number: 14,
      expected: 'fourteen'
    },
    {
      number: 15,
      expected: 'fifteen'
    },
    {
      number: 16,
      expected: 'sixteen'
    },
    {
      number: 17,
      expected: 'seventeen'
    },
    {
      number: 18,
      expected: 'eighteen'
    },
    {
      number: 19,
      expected: 'nineteen'
    }
  ]

  under20Numbers.forEach(item => {
    test(`should convert numbers under 20 correctly: '${item.number}'`, () => {
      expect(convertNumber(item.number)).toEqual(item.expected)
    })
  })
  const under100Numbers = [
    {
      number: 20,
      expected: 'twenty'
    },
    {
      number: 21,
      expected: 'twenty-one'
    },
    {
      number: 30,
      expected: 'thirty'
    },
    {
      number: 32,
      expected: 'thirty-two'
    },
    {
      number: 40,
      expected: 'forty'
    },
    {
      number: 42,
      expected: 'forty-two'
    },
    {
      number: '42',
      expected: 'forty-two'
    },
    {
      number: 50,
      expected: 'fifty'
    },
    {
      number: 54,
      expected: 'fifty-four'
    },
    {
      number: 60,
      expected: 'sixty'
    },
    {
      number: 65,
      expected: 'sixty-five'
    },
    {
      number: 70,
      expected: 'seventy'
    },
    {
      number: 76,
      expected: 'seventy-six'
    },
    {
      number: 80,
      expected: 'eighty'
    },
    {
      number: 87,
      expected: 'eighty-seven'
    },
    {
      number: 90,
      expected: 'ninety'
    },
    {
      number: 98,
      expected: 'ninety-eight'
    }
  ]

  under100Numbers.forEach(item => {
    test(`should convert numbers under 100 correctly: '${item.number}'`, () => {
      expect(convertNumber(item.number)).toEqual(item.expected)
    })
  })
  const under1000Numbers = [
    {
      number: 100,
      expected: 'one hundred'
    },
    {
      number: 101,
      expected: 'one hundred and one'
    },
    {
      number: 200,
      expected: 'two hundred'
    }
  ]

  under1000Numbers.forEach(item => {
    test(`should convert numbers under 1000 correctly: '${
      item.number
    }'`, () => {
      expect(convertNumber(item.number)).toEqual(item.expected)
    })
  })
  const thousandNumbers = [
    {
      number: 1000,
      expected: 'ten hundred'
    },
    {
      number: 2001,
      expected: 'two thousand and one'
    },
    {
      number: 1999,
      expected: 'nineteen hundred and ninety-nine'
    },
    {
      number: 17999,
      expected: 'seventeen thousand nine hundred and ninety-nine'
    },
    {
      number: 17999666,
      expected:
        'seventeen million nine hundred and ninety-nine thousand six hundred and sixty-six'
    }
  ]

  thousandNumbers.forEach(item => {
    test(`should convert thousand numbers correctly: '${item.number}'`, () => {
      expect(convertNumber(item.number)).toEqual(item.expected)
    })
  })
})
