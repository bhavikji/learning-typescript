"use strict";
// Function Types & callbacks
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    console.log(cb(result));
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    // this won't be poked by TS because, when we pass void as type we are saying TS that we'll ignore the result that might be returned by function. This means callback here has nothing to do with the return value.
    return result;
});
