/*
    PROBLEM 9:
    
    Given the following code:
    
*/

const foo = 1; // GLOBAL.foo
function run() {
    // run.foo - explicit declaration
    // therefore, this foo belongs in scope
    // of function run...
    const foo = 2;
    function _inner() {
        // _inner.foo
        // explicitly declared here, lol
        const foo = 3;
        console.log(foo); // _inner.foo === 3 
    }
    _inner();
}

run();
console.log(foo); // GLOBAL.foo === 1 
