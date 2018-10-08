// pure function - it has no
// external dependencies
function addThreeNums(a,b,c) {
    const sum = a + b + c; // addThreeNums.sum
    return sum;
}

//let sum; // global scope
function addThreeNums2(a,b,c) {
    sum = a + b + c; // GLOBAL.sum
    return sum;
}

addThreeNums2(1,2,3);
console.log("sum is...", sum);
