function summingUp(number1: number, number2: number): number {
    return number1 + number2;
  }
  
  function displayResult(num: number): void {
    console.log("Result ", num);
  }
  
  displayResult(summingUp(5, 10)); // => outputs: 15

  console.log(displayResult(summingUp(5, 10))); // => return "undefined", because function that return nothing will be technically in JS returns undefined.