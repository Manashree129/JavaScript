// if 

const isUserLoggedIn = true
const temperature = 41

if (temperature < 50){
    console.log("less then 50")
} else {
    console.log("temperature is greater then 50")
}


if (isUserLoggedIn){
    console.log("user is logged in")
}

// <, >, <=, >=, ==, !=, ===, !==

if (2 === "2"){
    console.log("executed")
}

const score = 200

if (score > 100){
    const power = "fly"
    console.log(`User power ${power}`)
}

// console.log(`User power ${power}`)

const balance = 1000

if (balance > 500) console.log("yes");

if (balance < 500){
    console.log("less than <500")
} else if (balance < 750){
    console.log("less than <750")
} else if (balance < 900){
    console.log("less than <900")
}else{
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const LOggedInFromeGoogle = false

if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}else{
    console.log("not allowed")
}

if (loggedInFromEmail || LOggedInFromeGoogle){
    console.log("user logged in")
}

