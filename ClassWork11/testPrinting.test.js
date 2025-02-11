const { namePrint, printSecondSub, zipCode, updateAge, addGp } = require("./printing.js");
beforeEach(() => student = {
    name: "John Doe",
    age: 22,
    courses: ["Maths", "Physics", "Computer Science"],
    address: {
        city: "New York", Zip: 10001
    }
});
afterEach(() => student = {
    name: "John Doe",
    age: 22,
    courses: ["Maths", "Physics", "Computer Science"],
    address: {
        city: "New York", Zip: 10001
    }
});

test('printing name', ()=> {
    let printedName = namePrint(student);
    let answer = "John Doe";
    expect(printedName).toBe(answer)
})

test('printing second subject', () => { 
    let result = printSecondSub(student);
    let answer = "Physics";
    expect(result).toBe(answer);
})

test('printing zip code from address', () => { 
    let result = zipCode(student);
    let answer = 10001
    expect(result).toBe(answer);
})

test('test if age 1s changed', () => { 
    let result = updateAge(student)
    let answer = {
        name: "John Doe",
        age: 23,
        courses: ["Maths", "Physics", "Computer Science"],
        address: {
            city: "New York", Zip: 10001
        }
    } 
    expect(result).toStrictEqual(answer)
})

test('test if GPA is added', () => { 
    let result = addGp(student)
    let answer = {
        name: "John Doe",
        age: 22,
        courses: ["Maths", "Physics", "Computer Science"],
        address: {
            city: "New York", Zip: 10001
        },
        GPA: 3.8, 
        
    } 
    expect(result).toStrictEqual(answer) 
})