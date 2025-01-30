var prompt = require('prompt-sync')();
userInput = prompt("enter pentagonal index to print: ")

function getPentagonalNumber(userInput){
   return userInput * (3 * (userInput) - 1)/2; 
	} 
let answer = getPentagonalNumber(userInput);
console.log(answer);
