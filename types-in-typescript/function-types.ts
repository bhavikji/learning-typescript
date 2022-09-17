// Functions as types

function addingUp (a: number, b: number) {
    return a + b;
}
let combinedValues: (a: number, b: number) => number;
combinedValues = addingUp;

console.log(combinedValues(8, 8));