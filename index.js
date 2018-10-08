/*
    CALLED: addThreeNums
    PARAMS: a, {number}
            b, {number}
            c, {number}

    RETURNS: {number}
*/

function addThreeNums(a, b, c) {
    const sum = a + b + c;
    console.log('HELLO');

    return sum;
}

console.log(addThreeNums(1,2,3)) // a = 1, b = 2, c = 3
console.log(addThreeNums(2,1,3)) // a = 2, b = 1, c = 3
addThreeNums(2,1) // a = 2, b = 1, c = undefined
addThreeNums() // a = undefined, b = undefined, c = undefined
addThreeNums(1,2,3,4) // a = 1, b = 2, c = 3, 
addThreeNums('1', '2', '3') // a = '1', b = '2', c = '3'






