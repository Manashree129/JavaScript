// Primitive

// 7 types : String, Number, Bollean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const temperature = null
let userEmail ;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);//false

const bigNumber = 1234566788901236n
console.log(typeof bigNumber) 



// Reference (Non-Primitive)

// Array, Objects, Functions

const cities = ["Maharashtra", "Delhi", "Gujrat", "Goa"] // Array
console.log(typeof cities);// Object


let myObj = {
    name: "Manashree",
    age: 15,
} //Object
 console.log(typeof myObj) //object


const myFunction = function(){
    console.log("Hello World"); 
}

console.log(typeof myFunction); 

// ################ MEMORY ###############

// Stack (Primitive), Heap(Non-Primitive)

let name = "Manashree"

let name2 = name
name2 = "Rakhade"

console.log(name)
console.log(name2)

let user = {
    email: "user@google.com",
    id: 1
}

let user2 = user

user2.email = "man@google.com"

console.log(user)
console.log(user2)



