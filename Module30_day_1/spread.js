const max = Math.max(6, 23, 35, 1, 97, 23);
console.log(max)

const numbers = [3, 4, 2, 23, 5, 6, 89, 14, 54, 32];
console.log(numbers);
console.log(...numbers);

const arrayMax = Math.max(...numbers);
console.log(arrayMax);

const a = ['Anonto', 'sakib', 'monsur'];
console.log(a);
console.log(...a)

const b = ['elias']
const c = ['sawon', 'nayon', 'rana']
const d = [...b, ...c];
console.log(d)


// object spreading

const person = {
    name: 'shohe',
    age: 37
}
const person2 = {...person}
person2.address = 'Rajshahi';
console.log(person)
const person2 = (person2)

// use spread operator to copy

const friends = [4, 5, 87, 9];
const bondhu = friends;
// bondhu.push(12);
// console.log(bondhu);
// console.log(friends);
const dosto = [...friends] // copy
console.log(dosto);
friends.push(100);
console.log(friends)


// advanced
const sonkha = [...friends, 9999]
console.log(sonkha);



