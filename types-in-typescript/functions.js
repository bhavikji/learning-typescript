"use strict";
function summingUp(number1, number2) {
    return number1 + number2;
}
function displayResult(num) {
    console.log("Result ", num);
}
displayResult(summingUp(5, 10)); // => outputs: 15
console.log(displayResult(summingUp(5, 10))); // => return "undefined", because function that return nothing will be technically in JS returns undefined.
