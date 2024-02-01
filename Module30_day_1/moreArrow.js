const difference = (x, y) => x - y;
const differ = difference(7, 5);
console.log(differ);

const multiply = (first, second, third) => first * second * third;

const mult = multiply(2, 3, 4,);
console.log(mult);
// single parameter or one parameter
// use bracet
const getAge = (person) => person.age;
const student = {name: 'ananata', age:45}
const age = getAge(student);
console.log(age);
// use no bracet
const getThird = numbers => numbers[2];
const third = getThird([4, 8, 99, 2, 23]);
console.log(third);

//no parameter
const getPI = () => Math.PI
console.log(getPI());

//large arrow function

// large arrow function. if you want to get anything returend from this function. then you have to use the return keyword;
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result =sum + mult;
    return result;
}