/*
Truthy:
1. true
2. any number (positive or negative) will be true without 0 (zero)
3. any string is truthy
4. '0' is truthy
5. {} (empty object) and any object is truthy
6. [] (empty array) and any array is truthy

Falsy:
1. false
2. 0
3. '' (empty string)
4. undefiend
5. null;

*/

const x = [];
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy')
}


// optional
// evabeo check kora jay
//check falsy
const y = null;
if(!y){
    console.log('check value is falsy')
}





// check truthy
const z = 50;
if(!!z){
    console.log('check value is truthy');
}

