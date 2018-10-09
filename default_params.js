function addThreeNums(a = 0, b = 0, c = 0) {
    const sum = a + b + c;
    return sum;
}

// a = 2, b = 1, c = undefined
console.log(addThreeNums(2,1))  // 3
// a = 2, b = undefined, c = undefined
console.log(addThreeNums(2))  // 2
// a = undefined, b = undefined, c = undefined
console.log(addThreeNums()) // 0 

/*
    PROBLEM 1:
    Create a function called getFullName that takes three arguments
    (one for firstName, one for middleName, one for lastName)
    
    use a default parameter for the middleName, set it to ""
*/

function getFullName(firstName, lastName, middleName = "") {
    //return firstName + " " + middleName + " " + lastName;
    return `${firstName} ${middleName} ${lastName}`;
}

console.log(getFullName("Mottaqui", "Karim", "Al"))


