const {getOdd, getWordsGreaterThanFourLetters, getStudent, greaterThanSeventy} = require("./filter.js")

test("return odd numbers", () => { 
    arr = [1, 2, 2, 4, 5, 8, 9];
    let result = getOdd(arr);
    let answer = [1, 5, 9];
    expect(result).toEqual(answer);

})

test("test if numbers with more than four letters are return", () => { 
    let words = ["hello", "world", "java", "egg"]
    let result = getWordsGreaterThanFourLetters(words)
    let answer = ["hello", "world",]
    expect(result).toEqual(answer)

})
test("return objects with age greater than 20", () => {
    const student = [
        { name: "John", age: 20 },
        { name: "Jane", age: 21 },
        { name: "Alice", age: 19 },
        { name: "ben", age: 23 },
    ];
    let result = getStudent(student)
    let answer = [{ name: "Jane", age: 21 }, { name: "ben", age: 23 }]
    expect(result).toStrictEqual(answer);
})

