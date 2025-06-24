const user = {
    username: "manashree",
    id: 1,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

//"this" refers to current context

// user.welcomeMessage()

// user.username ="sam"
// user.welcomeMessage()

console.log(this) // in node environment "this" refers to empty object

// in browser global object is window object

function chai(){
    let username = "manashree"
    console.log(this); //we cant use this in function (doesnt work) [if only "this" is used it refers to global object]
}
chai()


// const chai = function (){
//     let username = "manashree"
//     console.log(this.username); //we cant use this in function (doesnt work)
// }
// chai()




console.log("+++++++++++++++++++++++++++++++++++++++++")

const one = () => {
    let username = "manashree"
    console.log(this); 
}
chai()

const addTwo = (num1, num2) => {
    return num1 + num2 

}

console.log(addTwo(3, 4))

const subTwo = (num1, num2) =>num1 - num2 // implicit return (it assumes return we dont need to write "return")

console.log(subTwo(3, 4))

const mulTwo = (num1, num2) =>(num1 * num2) //we can wrap it in parenthesis (if wrapped in curly braces return keyword is must)

const name = () => ({username: "hitesh"})

console.log(name())

// const myArray = [2, 3 ,5]

// myArray.forEach(() => ())







   



