"use strict";
const product = {
    id: "1",
    price: 200,
    tags: ["tag1, tag2"],
    details: {
        title: "Title",
        description: "description"
    }
};
for (const tag of product.tags) {
    console.log("operating string functions on the fly!", tag.toUpperCase());
}
