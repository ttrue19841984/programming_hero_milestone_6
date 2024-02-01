function greeting(person){
    console.log(person)
}
const name = 'Halim mama'
greeting(name)
 const numbers = [45, 54, 79];
 greeting(numbers)
 const laptop = {price: 45000, brand: 'lenove', memory: '8gb'}
 greeting(laptop)


 function greeting2(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('good Mornning', name);
}
greeting2(greetingHandler, 'Tom hanks')
greeting2(greetingHandler, 'Tom Brady')
greeting2(greetingHandler, 'Tom Cruise')


function submitHandler(){
    console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)

// callback function

function numberOne(){
    console.log("numberOne is called");
}

function numberTwo(callback){
    console.log('numberTwo is called');
    callback();
}
numberTwo(numberOne);

// callback function

const function1 = (callback) => {
    callback()
}
const callback = () => {
    console.log('I am callback function')
}

function1(callback);

// callback function

const function2 = (a, callback3) => {
    const b = 5;
    callback3(a,b)
}
const callback3 = (x,y) => {
    console.log('sum =', x + y)
}

function2(10, callback3);