enum Role {ADMIN=1, READ_ONLY=2, AUTHOR="AUTHOR"}
const personData = {
    name: "Pyramid Oscar",
    age: 28,
    hobbies: ['Coding', 'Writing'],
    role: Role.ADMIN,
};

for (const hobby of personData.hobbies) {
    console.log('hobby',hobby);
}

if(personData.role === Role.ADMIN) {
    console.log("is admin")
}