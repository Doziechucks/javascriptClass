const array = [];

const arrayOfNumbers = new Array();
arrayOfNumbers[0] = 20;
arrayOfNumbers[1] = 15;
arrayOfNumbers.push(1);
arrayOfNumbers.push(2);
arrayOfNumbers.push(3);
arrayOfNumbers.pop();


console.log(arrayOfNumbers);
console.log(arrayOfNumbers.pop());

let firstName = "chinedu";

let newArray = Array.from(firstName);
console.log(newArray);