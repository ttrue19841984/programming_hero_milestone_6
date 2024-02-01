const polapain = [
    {name: 'abul', job: 'sorkari', salary:21000},
    {name: 'kabul', job: 'besorkari', salary:25000},
    {name: 'babul', job: 'besorkari', salary:27000},
    {name: 'habul', job: 'sorkari', salary:28000},
    {name: 'mabul', job: 'besorkari', salary:35000},
    {name: 'dabul', job: 'sorkari', salary:61000}
]

const vaggobans = polapain.filter((pola) => (pola.job === 'sorkari' && pola.salary >= 20000) || (pola.job === 'besorkari' && pola.salary >= 40000))
const polaNumber = Math.floor(Math.random() * vaggobans.length)

const finaljamai = vaggobans[polaNumber].name;

console.log(`${finaljamai}, tumi jitso....!`)


// second math
const person = [
    {id: 'ID01)', name: 'abul vai', age:23},
    {id: 'ID02)', name: 'abul vai', age:43},
    {id: 'ID03)', name: 'abul vai', age:54},
    {id: 'ID04)', name: 'abul vai', age:29},   
]
