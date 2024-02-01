const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 60000},
    {id: 3, name: 'hp', price: 55000},
    {id: 4, name: 'mac', price: 165000}
]
// map
const names = products.map(product => product.name);
console.log(names)
const prices = products.map(product => product.price);
console.log(prices);

// forEach
products.forEach(p => console.log(p.id));
products.forEach(p => console.log(p.price));
products.forEach(p => console.log(p.name));

// fifter avabp 65000 price laptop
const expensive = products.filter(product => product.price > 65000)
console.log(expensive)


// find belo 65000 price laptop

const affordable = products.find(product => product.price < 65000)
console.log(affordable )