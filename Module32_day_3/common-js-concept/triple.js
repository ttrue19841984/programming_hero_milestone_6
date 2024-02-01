// always use === for primitive value
// equal comparison dose not work for non-primitive value


const first = [];
const second = first;
if(first == second){
    console.log("values are equal")
}
else{
    console.log('values are not equal')
}