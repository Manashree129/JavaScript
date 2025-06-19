//array

const myArr = [1, 2, 3, 4, 5]

console.log(myArr[1]);

const cities = ["mumbai", "delhi"]
const myArr2 = new Array(1,2,3,4)

// Array methods

myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(10)
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(30))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof myArr)
console.log(typeof newArr)

// slice, splice

console.log("A ", myArr)
const myArr1 = myArr.slice(1, 3)
console.log(myArr1)
console.log("B ",myArr);
console.log()

const myArr11 = myArr.splice(1, 3)
console.log("C ",myArr);
console.log(myArr11)












