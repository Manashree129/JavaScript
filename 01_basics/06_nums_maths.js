const score = 400

const balance = new Number(10)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const number2 = 142.885
console.log(number2.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log("--------Maths--------")

// ========================== Maths =======================

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.max(1,3,5,7,8))
console.log(Math.min(1,3,5,7,8))

console.log(Math.random()) //val will be from 0 to 1

console.log((Math.random()*10) + 1) 

console.log(Math.floor((Math.random()*10) + 1))// +1 will never give 0


const min = 10
const max = 20

console.log("--------")
console.log(Math.floor(Math.random() * (max - min + 1)) + min)