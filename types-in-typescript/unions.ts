function flexibleAdd(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const additions = flexibleAdd(10,10);
console.log("addtions", additions);

const concateStrings = flexibleAdd("Pyramid", "Oscar");
console.log(concateStrings)