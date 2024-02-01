const first = 'jaan';
const last = 'pakhi';
const greet = 'potas potas';
const name = first + ' ' +last + ' ' + greet;
console.log(name);
const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);
const math = `The sum of ${a} and ${b} is ${a + b}`;
console.log(math)

const subjects = ['bangla', 'english', 'match']
const numbars = [45, 48, 98, 78];
const student = {name: 'john ochana', age: 5}
const total = `the sum of ${numbars[0]} and ${student.age} is ${numbars[0] + student.age} and ${subjects.map(subject => subject).join(" ")}`;
console.log(total);

const email = 'Hi john \n' +
'tumi mara mari korba naki';
console.log(email);

const challenge = `john Cena
cena cena ochena
mair dimu prochur`
console.log(challenge)



