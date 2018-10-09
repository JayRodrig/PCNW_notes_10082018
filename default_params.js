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
