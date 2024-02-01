// function declaration


// function add(a, b){
//     const result = a + b;
//     return result;
// }

function add(a, b){
    return a + b;
}

// function expression

const add2 = function(a, b){
    return a + b;
}
const sum2 = add2(4, 10);
console.log(sum2)
// arrow function

const add3 = (a, b) => a + b;
const sum = add3(5, 90);
console.log(sum);
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const sum4 = add4(3, 4, 5, 2);
console.log(sum4)
const multiply = (num1, num2) => num1 * num2;
const mult = multiply(3, 12);
console.log(mult);




