const actor = {
    name: 'Ananta',
    age: 30,
    phone: '000498383',
    money: 2153245421
}

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;


// if right side is an object left side of destructuring will be object as well
// const {phone, age} = actor;
 const {phone, age: boyos} = actor;


console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);
// console.log(age);
// console.log(age);


const person ={name: 'mehedy', age: 26, address: 'Rajshahi'}
const {age,...rest1} = person;
console.log(rest1)
// array destructuring

const numbers = [45, 88]
const [first, second] = numbers;
const [x, y] = [12, 66]


 function doubleThem(a, b){
    return [ a*2, b*3];
 }
 const [prothom, ditiyo] = doubleThem(6, 9);
 console.log(prothom, ditiyo)


 const arr = [2, 4, 3, 6, 9, 8, 7, 9];
 const [a, b, c, ...rest] = arr;
 console.log(a, b, c, rest);

//  Object destructuring

 