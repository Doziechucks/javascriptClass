var prompt = require('prompt-sync')();
let userInput = prompt("enter number: ")

function sumDigits(userInput){
   let summation = 0;
   let userStr = userInput.toString();
   let number = userStr.length;
   for(let number = 1; number <= userStr.length; number++){
      let digit = Math.floor(userInput / (10 ** (userStr.length - number)))
      summation = summation + digit;
      userInput = userInput % (10 ** (userStr.length - number))
	}

   return summation;
}
let answer = sumDigits(userInput);
console.log(answer); 

