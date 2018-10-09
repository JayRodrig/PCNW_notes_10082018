/*
    PROBLEM 6:
    
    Given the following code:
    
    function run() {
        const foo = 1;
        function _inner() {
            console.log(foo); // what is foo? why?
        }
        _inner();
    }
    
    run();
    console.log(foo); // what is foo? why?
*/


function run() {
    const foo = 1; // run.foo
    function _inner() {
        // run.foo - in scope of _inner
        // no variable explicitly defined
        // so go up one scope block
        console.log(foo); // run.foo === 1
    }
    _inner();
}

run();
console.log(foo); // GLOBAL.foo, which is UNDEFINED
                  // throws a ReferenceError




