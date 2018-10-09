/*
    PROBLEM 10:
    
    Given the following code:
    
*/

let foo = 1; // GLOBAL.foo
function run( anotherFunctionToCall ) {
    // run.anotherFunctionToCall
    anotherFunctionToCall(); 
    // GLOBAL.foo === 2
    console.log(foo) // 
}

run(function() {
    // GLOBAL.foo
    foo = 2;
})
console.log(foo); // what is foo? why?

