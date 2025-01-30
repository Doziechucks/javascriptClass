let numbers = [1, 2, 3, 4, 5]

let person = {
   name: "chi",
   age: 3
}

for (const number of numbers){
   console.log(number)
} 

for(let index in numbers){
   console.log(index + " " + numbers[index])
   console.log(" ")
}