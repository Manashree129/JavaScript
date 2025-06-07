const Id = 12345

// Id = 12
// TypeError: Assignment to constant variable.

let city = "Mumbai"
function myFunction() {
  let Name = "Man"
  city = "delhi"
}
Name = " Manashree"
myFunction()

console.table([Id,Name,city])
