const Id = 12345

// Id = 12
// TypeError: Assignment to constant variable.
var name = "Manashree"
{
  var name = "Mans"
  console.log(name)

}

// prefer not to use var 
// because of issue in block scope and functional scope

let city = "Mumbai"
{
  let city = "Delhi"
  console.log(city)
}
console.log(city)


console.table([Id,name,city])
