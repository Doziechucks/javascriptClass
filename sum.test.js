const {multiply, addTwoNumbers, getOddNumbers} = require("./index.js");
   let numberOne = 2;
   let numberTwo = 6;

test('multiply two numbers', ()=>{
   let result = multiply(numberOne, numberTwo);
   let answer = 12;
   expect(result).toBe(answer)  

})

test('add two numbers', ()=>{
   let summation = addTwoNumbers(numberOne, numberTwo);
   let answer = 8;
   expect(summation).toBe(answer)
})

test('return odd numbers', ()=>{
   let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
   let result = getOddNumbers(arrayOfNumbers);
   let answer = [1, 3, 5, 7];
   expect(result).toEqual(answer);
})

