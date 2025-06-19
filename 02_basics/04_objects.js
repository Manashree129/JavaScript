// const linkedinUser = new Object() //singleton object

const linkedinUser = {} // non singleton object

linkedinUser.id = "abc123"
linkedinUser.name = "Tina"
linkedinUser.isLoggedIn = false

console.log(linkedinUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userullname: {
            firstname: "Manashree",
            lastname: " Rakhade"
        }
    }
}

console.log(regularUser.fullname.userullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} is the target

const obj3 = {...obj1, ...obj2}


console.log(obj3)

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    }
]

users[1].email

console.log(linkedinUser)

console.log(Object.keys(linkedinUser)) //every key in an array

console.log(Object.values(linkedinUser))

console.log(Object.entries(linkedinUser)) // every key-value in arrays

console.log(linkedinUser.hasOwnProperty('isLoggedIn'))


console.log("++++++++++++ +++ destructuring +++++++++++++++")
const course ={
    coursename: "JS",
    price: "999",
    courseInstructor: "abc"
}

//course.courseInstructor

const {courseInstructor: Instructor} = course
console.log(Instructor) // instead of writing courceintructor

// API in json format

// {
//     "name": "manashree",
//     "age": "2",
//     "...": "..."
// }







