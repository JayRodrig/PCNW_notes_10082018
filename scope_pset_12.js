/*
    PROBLEM 12:
    
    Given the following code:
    
*/

let foo = 1; // GLOBAL.foo
function run( anotherFunctionToCall ) {
    // GLOBAL.foo
    foo = 9;
    anotherFunctionToCall(); // GLOBAL.foo = 2
    console.log(foo) // 2
}

run(function() {
    // GLOBAL.foo
    foo = 2;
});
console.log(foo); // 2 
