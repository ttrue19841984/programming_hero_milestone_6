
//arguments is a array like object
function sum(a, b, c){
const argu = [...arguments];
 console.log(argu)
    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12, 45, 89, 56)
console.log(total)

console.log(sum.length)