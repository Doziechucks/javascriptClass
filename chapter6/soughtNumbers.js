var prompt = require('prompt-sync')();
num1 = prompt("enter pentagonal index to print: ");
num2 = prompt("enter pentagonal index to print: ");
num3 = prompt("enter pentagonal index to print: ");

function displaySoughtedNumbers(num1, num2, num3)
   largest = num1
   middle = num2
   lowest = num3
   if (num2 > num1 && num2 > num3 and num1 > num3) {
      largest = num2
      middle = num2
      lowest = num3
   }

   if (num3 > num2 && num3 > num1 and num2 > num1) {
      largest = num3
      middle = num2
      lowest = num1
   }
return 

}  