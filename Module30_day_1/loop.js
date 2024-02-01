// for of use on array or string not in object
// for in use on object

const glass ={
    name:'glass',
    color: 'golden',
    price:12,
    isCleaned: true
};

for(const key in glass){
    const value = glass[key];
    console.log(key, value)
}