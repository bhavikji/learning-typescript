function generateError(message:string, code:number): never {
    throw{message:message, errorCode:code};
}

const result = generateError("Something went wrong",500);
console.log(result); // no undefined logged because of error thrown it crashes the script. Never type never returns anything.