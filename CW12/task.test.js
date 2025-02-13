const {greaterThanSeventy, addToScores, numbersSquare, tagNameToBook, afternoonClasses} = require("./task")

test("if number greater than seventy", () => { 
    array = [78, 59, 80, 79, 66, 88, 87, 85, 69, 76]
    let result = greaterThanSeventy(array);
    let answer = [78, 80, 79, 88, 87, 85, 76]
    expect(result).toEqual(answer);
})

test("test if 5 is added to each of the students", () => { 
    grades = [77, 68, 87, 66]
    let result = addToScores(grades);
    let answer = [82, 73, 92, 71]
    expect(result).toEqual(answer)
})

test('test if square is returned', () => { 
    numbers = [2, 4, 6, 8, 10];
    let result = numbersSquare(numbers)
    let answer = [4, 16, 36, 64, 100]
    expect(result).toEqual(answer)
})

test("test if books are distributed", () => { 
    names = ["chidi", "oghene", "dozie", "divine"]
    book = "boss book";
    let result = tagNameToBook(names, book);
    let answer = { chidi: "boss book", oghene: "boss book", dozie: "boss book", divine: "boss book" };
    expect(result).toStrictEqual(answer)
})

test("test if afternoon classes can be separated", () => { 
    classTimings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "6:00 PM", "1:00 AM"];
    let result = afternoonClasses(classTimings)
    let answer = ["1:00 PM", "3:00 PM"]
    expect(result).toEqual(answer);
})