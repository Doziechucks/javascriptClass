var prompt = require('prompt-sync')();
let userInput = prompt("enter number: ")

function reverse(userInput){
   let summation = "";
   let userStr = userInput.toString();
   let number = userStr.length; 
   for(let number = 1; number <= userStr.length; number++){
      let digit = userInput % 10
      main = digit.toString();
      summation = summation + main
      userInput = Math.floor(userInput / 10)
	} 
   return summation
}

   
let answer = reverse(userInput);

function isPalindrome(userInput){
   
   if (reverse(userInput) == userInput){return true;}
   else return false; 
   
}
let result = isPalindrome(userInput);
console.log(result);
console.log(answer); 
