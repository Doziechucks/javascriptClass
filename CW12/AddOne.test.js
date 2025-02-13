const { addOne } = require("./AddOne.js");

test("test if correct one is added", () =>{ 
    let arr = [2, 44, 6]
    let result = addOne(arr)
    answer = [2, 4, 4, 7]
    expect(result).toEqual(answer)
})