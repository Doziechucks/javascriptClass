const { addThreeToEach } = require("./arrayFunctions.js");

test('Add three to each element', () => {
    arr = [2, 4, 6];
    let result = addThreeToEach(arr);
    let answer = [5, 7, 9];
    expect(result).toEqual(answer);
 })