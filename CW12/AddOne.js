list = [1, 2, 3]

function addOne(arr) {
    let numberString = "";
    arr.forEach((element) => {
        toString(element);
        numberString += (element); 

    })
     
    let number = parseInt(numberString);
    number = number + 1
    list = []
    while (number > 0) { 
        list.unshift(number % 10);
        number = Math.floor(number / 10)

    }
    return list    
    }

console.log(addOne([5, 3, 9, 99]));

module.exports = {addOne}