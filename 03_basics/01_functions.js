function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("E");   
}

sayMyName()
sayMyName //refernce of a function

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

// const result = addTwoNumbers(2, 4)

// console.log("Result", result)

function addTwoNumbers_2(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers_2(2, 4)

console.log("Result: ", result)

/*
function LoginUserMessage(username){
// //     if(username === undefined){
// //         console.log("Please enter a username")
// //         return
// //     }
// //     return `${username} just logged in`
*/

function LoginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(LoginUserMessage())


// Rest operator 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Manashree",
    id: 1
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`)
}
handleObject(user)

handleObject({
    username: "sam",
    id: 2
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 600, 800]))