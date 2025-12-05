const products = [
    {
        image: "",
        name: "",
        rating: {
            stars: "",
            count: "",
        },
        price: "",
    },
    {
        image: "",
        name: "",
        rating: {
            stars: "",
            count: "",
        },
        price: "",
    },
];

let productsHTML = "";

products.forEach((product) => {
    productsHTML += ` src="${product.name}"  `;
});
