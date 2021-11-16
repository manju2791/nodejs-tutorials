import { sumOfNumbers } from '../../src/add'

describe('test add function', () => {

  it('should return sum of numbers', () => {
    expect(sumOfNumbers(10, 5)).toBe(15)
  })

})
