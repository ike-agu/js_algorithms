const fizzBuzzFunc = require('./fizzBuzz')

describe('fizzBuzz function',()=>{

  test('fizzBuzz is defined', () => {
    expect(fizzBuzz(n)).toBeDefined()
  })

  test('fizzBuzz is multiple of 3 and 5', ()=>{
    expect(fizzBuzz(3,5)).toBe("FizzBuzz")
  })

  test('fizzBuzz multiple of 3', ()=>{
    expect(fizzBuzz(3)).toEqual("Fizz")
  })

  test(' fizzBuzz is multiple of 5', ()=>{
    expect(fizzBuzz(5)).toEqual("Buzz")
  })

   test(' fizzBuzz is not multiple of 3 or 5', ()=>{
    expect(fizzBuzz(n)).toEqual(n)
  })

};
