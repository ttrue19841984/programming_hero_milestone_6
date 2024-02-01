function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer = kitchen();
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
const secondServer = kitchen();
console.log(secondServer())
console.log(secondServer())
console.log(secondServer())