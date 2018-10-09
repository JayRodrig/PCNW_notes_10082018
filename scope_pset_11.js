/*
    PROBLEM 11:
    
    Given the following code:
    
*/

let foo = 1; //  GLOBAL.foo
function run( anotherFunctionToCall ) {
    // run.foo
    const foo = 9;
    anotherFunctionToCall();
    // run.foo - 
    console.log(foo) // 9
}

run(function() {
    foo = 2; // GLOBAL.foo
});
console.log(foo); // 2 
