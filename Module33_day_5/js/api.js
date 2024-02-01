const user = {id: 1, name: 'Gorid Aamir', job: 'actor'}
const stringified = JSON.stringify(user)
console.log(user)
console.log(stringified)


// { id: 1, name: 'Gorid Aamir', job: 'actor' }
// {"id":1,"name":"Gorid Aamir","job":"actor"} ---JSON

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli', 
        city: 'dilli',
        country: 'INDIA'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpne: true,
    isNew: false
}
console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)