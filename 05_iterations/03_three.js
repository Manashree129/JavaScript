// for of 

// ["", ""]
// [{}, {}, ]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);   
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " "){
        continue;
    }
    console.log(`each char is ${greet}`);
    
} 

// maps 

const map1 = new Map()
map1.set('IN', 'INDIA')
map1.set('USA', 'UNITED STATES OF AMERICA')
map1.set('Fr', 'France')
map1.set('IN', 'INDIA')

console.log(map1);

for (const [key, value] of map1) {
    console.log(key, ":-",  value);    
}

const myObject = {
    Game1: 'NFS',
    GAME2: 'SPIDERMAN'
}

// for (const [key, value] of myObject) {
    
// } //not working for objects (objects are not iterable)