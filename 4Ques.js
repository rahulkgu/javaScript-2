const products = [{
        name: "Laptop",
        price: 120000,
    },
    {
        name: "Mobile",
        price: 70000,
    },
    {
        name: "Laptop Bag",
        price: 20000,
    },
    {
        name: "Watch",
        price: 20000,
    },
    {
        name: "Mobile Charger",
        price: 1500,
    },
];

let NewArr = products.sort(products.price)

console.log("The product with maximum amount is", NewArr[0].name, "which is priced at Rs.", NewArr[0].price);
console.log("The product with minimum amount is", NewArr[products.length - 1].name, "which is priced at Rs.", NewArr[products.length - 1].price);