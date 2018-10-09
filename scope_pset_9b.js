/*
    PROBLEM 9:
    
    Given the following code:
    
*/

let foo = 1; // GLOBAL.foo
function run() {
    function _inner() {
        // GLOBAL.foo
        // not explicitly defined here, lol
        // go up one scope - to run
        // BUT, not explicitly defined there either
        // go up to GLOBAL
        console.log(foo); // GLOBAL.foo === 1 
        foo = 10; // GLOBAL.foo === 10
    }
    _inner();
}

run();
console.log(foo); // GLOBAL.foo === 10 
