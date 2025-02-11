const { namePrint } = require("./printing.js");
student = {
    name: "John Doe",
    age: 22,
    courses: ["Maths", "physics", "computer science"],
    address: {
        city: "New York", Zip: 10001
    }
}
    
test('printing name', ()=> {
    let printedName = namePrint(student);
    let answer = "John Doe";
    expect(printedName).toBe(answer)
})