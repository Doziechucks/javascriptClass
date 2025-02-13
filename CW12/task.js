 
function greaterThanSeventy(scores) {
    return scores.filter((score) => score > 70);
}
 
function addToScores(scores) { 
    return scores.map((score) => (score + 5))
}

function numbersSquare(numbers) { 
    return numbers.map((number) => (number ** 2))
}

function tagNameToBook(names, book) { 
    myLibrary = {}
    for (user of names) { 
        myLibrary[user] = book;
    }
    return myLibrary;
}
function afternoonClasses(classTime) {
    checker = []
    for (time of classTime) { 
        time.split("");
        if (time.at(-2) == "P" && ((time[0] == 1 && time[1] == 2) || (time[0] >= 1 && time[0] < 4)) ){ 
            checker.push(time)
        }
    }
    return checker
}


module.exports = { greaterThanSeventy, addToScores, numbersSquare, tagNameToBook, afternoonClasses}