function namePrint(object) { 
    return object.name;
}

function printSecondSub(object) { 
    return object.courses[1];
}

function zipCode(object) { 
    return object.address.Zip;
}

function updateAge(object) { 
    object.age = 23;
    return object;
}

function addGp(object) { 
    object.GPA = 3.8;
    return object;
}

module.exports = { namePrint, printSecondSub, zipCode, updateAge, addGp }
