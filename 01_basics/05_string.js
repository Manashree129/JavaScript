const name = "Manashree"
const repoCount = 10

console.log(name + repoCount + "JS"); // outdated

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const cityName = new String('New-Mumbai')

console.log(cityName[0])
console.log(cityName.__proto__);

console.log(cityName.length)
console.log(cityName.toUpperCase());
console.log(cityName.charAt(2));
console.log(cityName.indexOf('i'))

const newString = cityName.substring(0,3); //no negative
console.log(newString);

const string2 = cityName.slice(-8, 5)
console.log(string2)

const string3 = "   hello   "
console.log(string3);
console.log(string3.trim());



