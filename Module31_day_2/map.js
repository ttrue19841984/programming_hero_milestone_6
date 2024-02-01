
// নম্বর এরেকে দ্বিগুন করার উপাই
const numbers = [4, 5, 2, 8, 10];

const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double)
}

console.log(doubled)
// নম্বর এরেকে দ্বিগুন করার নতুন উপাই 

function doublet(num){
    console.log('num now', num)
    return num * 2;
}

const result = numbers.map(doublet);
console.log(result)

// নম্বর এরেকে দ্বিগুন করার short cut নতুন উপাই 

const double2 = num => num * 2;
const output = numbers.map(double2)
console.log(output)

// নম্বর এরেকে দ্বিগুন করার more short cut final নতুন উপাই

const output2 = numbers.map(n => n * 2);
console.log(output2)

const numbers3 = [12, 10, 8, 15, 7];


const doubled3 = numbers3.map(num => num * 2)
console.log(doubled3);

const fiveBonus = numbers3.map(num => num + 5);
console.log(fiveBonus)


const halvs = numbers3.map(num => num / 2);
console.log(halvs)


const friends = ['Tom', 'john', 'Micheal', 'Oliver' ]
const lengths = friends.map(friend => friend.length);
console.log(lengths)

const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter)