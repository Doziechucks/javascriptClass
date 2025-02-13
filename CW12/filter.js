function isOdd(number) { 
    let answer = number % 2 != 0;
    return answer;

}

function getOdd(array) { 
    return array.filter(isOdd);
}

const getWordsGreaterThanFourLetters = (array) =>{ 
    return array.filter((word) => word.length > 4);
}

function getStudent(students) {
    return students.filter((student) => student.age > 20);

}
 
function greaterThanSeventy(scores) {
    return scores.filter((score) => score > 70);
 }

module.exports = { getOdd, getWordsGreaterThanFourLetters, getStudent, greaterThanSeventy}