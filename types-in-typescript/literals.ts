function combinator(input1: number | string, input2: number | string, resultType: 'number' | 'text') {
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultType === "number") {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const sum = combinator(10,10, "number");
console.log("addtions", additions);

const concateString = combinator("10", "10", "number");
console.log(concateStrings)