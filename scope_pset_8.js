/*
    PROBLEM 8:
    
    Given the following code:
    
*/

let foo = 1; // GLOBAL.foo
function run() {
    // GLOBAL.foo - no explicit 
    // declaration for foo in
    // scope of function run
    foo = 2;
    function _inner() {
        // GLOBAL.foo - no explicit 
        // declaration for foo in
        // scope of function _inner,
        // go up to scope function run
        // use that
        console.log(foo); // GLOBAL.foo === 2 
    }
    _inner();
}

run();
console.log(foo); // GLOBAL.foo == 2 
