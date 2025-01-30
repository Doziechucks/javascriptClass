let user = {firstName: "Favor",
            lastName : "Esther",
            age: 12,  
            greet: function(){
                      return("hello")
	}

}
let items = Object.keys(user);
console.log(items)

let values = Object.values(user);
console.log(values)

let entry = Object.entries(user);
console.log(entry)