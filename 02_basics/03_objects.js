// object literals

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")


const jsuser = {
    name: "Manashree",
    "full name": "Manashree Rakhade",
    mySym1: "mykey1",
    [mySym2]: "mykey2", //correct syntax for symbol
    age : 15,
    location: "Jaipur",
    email: "example@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Mon", "sat"]
}

console.log(jsuser.email)

console.log(jsuser["email"])

console.log(jsuser["full name"])

console.log(typeof jsuser["mySym1"])

jsuser.email = "manashree@eg.com"

// Object.freeze(jsuser) // values cant be changed

jsuser.email = "rakhade@eg.com"

console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello")
}

console.log(jsuser.greeting) //[Function (anonymous)]
console.log(jsuser.greeting())










