import spellThreeDigitNumber from './spell-three-digit-number'

describe('spellThreeDigitNumber', () => {
  test('should exist', () => {
    expect(spellThreeDigitNumber).toBeDefined()
  })

  test('should return', () => {
    expect(spellThreeDigitNumber(642)).toEqual('six hundred and forty-two')
    expect(spellThreeDigitNumber(1642)).toEqual('sixteen hundred and forty-two')
  })
})
