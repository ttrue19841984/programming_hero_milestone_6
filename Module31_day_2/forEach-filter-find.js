// forEach

const numbers = [1, 5, 6, 4, 15];
// const result = numbers.forEach(n => console.log(n))
console.log(result);
const result = numbers.forEach(n => {

})
console.log(result);

// filter 
 
const numbers2 = [1, 5, 6, 4, 15];
const players = [75, 65, 72, 55, 59]
// const selected = players.filter(player => player > 70)
// const selected = players.filter(player => player > 80)
// const selected = players.filter(player => player > 50)
// const selected = players.filter(player => player % 2 === 1)
const selected = players.filter(player => player % 2 === 0)
console.log(selected);

const friends = ['Tom', 'john', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(friends => friends.length > 4)
console.log(oddFriends);

// find method

const players2 = [64, 65, 67, 72, 55, 59]

const selected2 = players2.find(player => player > 60);
console.log(selected2)