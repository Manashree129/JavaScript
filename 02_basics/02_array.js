const marvel_heroes = ["thor" ,"Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

console.log("++++++++++++++++++++ Spread operator ++++++++++++++++")

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

console.log("++++++++++++++ flat +++++++++++")
const array1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const complexArray = array1.flat(Infinity)

console.log(complexArray)

console.log(Array.isArray("Hello"))
console.log(Array.from("Hello"))
console.log(Array.from({name: "Manashree"})) 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


