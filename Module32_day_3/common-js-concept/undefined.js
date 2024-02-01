// 8 ways to get undefine


// 1. variable that is not initialized will give undefined
let first;
console.log(first)

// 2. function with no return

function second(a, b){
    const total = a + b;
}
const result = second()
console.log(result)

// 3. parameter that is not passed will be undefiend

function third(a, b, c, d){
    const total = a+b+c+d;
    console.log(a, b, c, d)
}
third(2, 3);

// 4. if return has nothing on the right side will return undefiend

function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(2, -6);
console.log(total)

// 5. property that does not exists on an object will give you undefined

const fifth = {id: 2, name: 'ponchom', age: 40}
console.log(fifth.age, fifth.salary);

// 6. accessing array elements outside of the index range will you get undefiend
const sixth = [4, 89, 85, 23, 2]
console.log(sixth[1], sixth[5], sixth[100])

// 7.deleting an element inside an array
 
const seventh = [4, 89, 85, 23, 2]
// you should not do it. Instead use splice
delete seventh[1]
console.log(seventh[1], seventh[5], seventh[100])
console.log(seventh)

// 8. set a value directly to undefined
const eighth = undefined;


const ninth = null;
const data = {results: [], updated: null};
console.log(typeof undefined)
console.log(typeof null)