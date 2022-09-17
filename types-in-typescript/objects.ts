const person : {
    name: string;
    age: number;
} = {
    name: "Pyramid Oscar",
    age: 28
}

console.log(`person name ${person.name}`)

// working with nested objects

const nestedObject : {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    }
} = {
    id: "1",
    price: 200,
    tags: ["test"],
    details: {
        title: "Title",
        description: "description"
    }
}