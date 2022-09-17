type Combinable = number | string;
type ResultType = 'number' | 'text';
type User = {name: string; age: number};

function combinable(input1: Combinable, input2: Combinable, resultType: ResultType) {
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultType === "number") {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combine = combinable(10,10, "number");
console.log("addtions", additions);

const combineString = combinable("10", "10", "number");
console.log(concateStrings)

// type aliases can be useful with object as well.

const user : User = { name: "Pyramid Oscar", age: 28}