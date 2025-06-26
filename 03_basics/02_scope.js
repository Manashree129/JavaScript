let a = 40
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("condition true:", a)
}

console.log(a);
// console.log(b);
console.log(c);

function one(){
   const username = "manashree"

   function two(){
    const website = "youtube"
    console.log(username);
   }
//    console.log(website); //as this is outside the scope

   two()
}

one()

if (true){
    const username = "manashree"
    if (username === "manashree"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}

// console.log(username);

console.log("_____------------")
console.log(addone())
function addone(num){
    return num + 1
}

// console.log(addTwo()) //cant be called because its inside variable
const addTwo = function(num){
    return num + 2
}

