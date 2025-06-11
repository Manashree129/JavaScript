let score = "33"
console.log(typeof(score))

let ValueInNumber = Number(score)
console.log(typeof ValueInNumber)

let val = "40aa"
console.log(typeof(val))

let valInNumber = Number(val)
console.log(typeof valInNumber)
console.log(valInNumber)

let var1 = null
console.log(typeof var1)

let var1InNumber = Number(var1)
console.log(var1InNumber)

let var2 = undefined

let var2InNumber = Number(var2)
console.log(var2InNumber)

let var3 = true

let var3InNumber = Number(var3)
console.log(var3InNumber)

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0

let IsLoggedIn = "Hello World"
let BooleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(BooleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Hello" => true

let num1 = 33
let stringnum1 = String(num1)
console.log(stringnum1)
console.log(typeof stringnum1)
