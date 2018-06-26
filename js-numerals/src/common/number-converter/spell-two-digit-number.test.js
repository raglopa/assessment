import spellTwoDigitNumber from './spell-two-digit-number'

describe('spellTwoDigitNumber', () => {
  test('should exist', () => {
    expect(spellTwoDigitNumber).toBeDefined()
  })

  test('should return', () => {
    expect(spellTwoDigitNumber(42)).toEqual('forty-two')
    expect(spellTwoDigitNumber(2)).toEqual('two')
  })
})
