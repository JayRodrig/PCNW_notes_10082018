/*
    PROBLEM 7:
    
    Given the following code:
    
    const foo = 1;
    function run() {
        const foo = 2;
        function _inner() {
            console.log(foo); // what is foo? why?
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
*/

const foo = 1; // GLOBAL.foo
function run() {
    const foo = 2; // run.foo
    function _inner() {
        // run.foo - no explicit declaration
        // of foo in the scope of _inner
        console.log(foo); // run.foo === 2
    }
    _inner();
}

run();
console.log(foo); // GLOBAL.foo === 1 
