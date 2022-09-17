// Function Types & callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  console.log(cb(result));
}

addAndHandle(10, 20, (result) => { // no type assignment on the result param because we have made it clear in the call back that callback will expect one param of number.
    console.log(result);
    // this won't be poked by TS because, when we pass void as type we are saying TS that we'll ignore the result that might be returned by function. This means callback here has nothing to do with the return value.
    return result; 
    
});