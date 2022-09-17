"use strict";
const personDetails = {
    name: "Pyramid Oscar",
    age: 28,
    hobbies: ["Writing", "Coding"],
    role: [1, "author"]
};
// in case of tuples unfortunately push is allowed.
personDetails.role.push("admin");
// personDetails.role[1] = 10 NOT ALLOWED!!!
// person.role = [] works well with length as well, the length should be equal to the specified length in a tuple.
