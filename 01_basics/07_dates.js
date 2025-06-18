// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString);

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023, 0, 23, 5, 5)
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("06-18-2025")
console.log(myCreatedDate3.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) 
// Date.now() returns the current timestamp in milliseconds since January 1, 1970 (UTC).

// It's the number of milliseconds at the exact moment the line runs.

console.log(myCreatedDate3.getTime());
// myCreatedDate3 is a Date object created from the string "06-18-2025".

// getTime() returns the timestamp (milliseconds since Jan 1, 1970) of that specific date.

console.log("------------ miliseconds into seconds------------")
console.log(Math.floor(Date.now()/1000));

console.log("+++++++++++++++++++++++++++++++")
let newDate = new Date()
console.log(newDate.getMonth()+1)

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))










