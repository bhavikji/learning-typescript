"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const personData = {
    name: "Pyramid Oscar",
    age: 28,
    hobbies: ['Coding', 'Writing'],
    role: Role.ADMIN,
};
for (const hobby of personData.hobbies) {
    console.log('hobby', hobby);
}
if (personData.role === Role.ADMIN) {
    console.log("is admin");
}
