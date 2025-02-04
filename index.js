function multiply(numberOne, numberTwo){
   let result = numberOne * numberTwo;
   return result;
}
function addTwoNumbers(numberOne, numberTwo){
   let summation = numberOne + numberTwo;
   return summation;
} 

function getOddNumbers(arr){
   let newArray = [];
   let count = 0
   for(index in arr){
      if(arr[index] % 2 != 0){
         newArray[count++] = arr[index]	 	
      }
   }
return newArray;
}

module.exports = {multiply, addTwoNumbers, getOddNumbers}
