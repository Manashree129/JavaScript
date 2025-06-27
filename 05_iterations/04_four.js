const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'rubby',
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`);
    
}

const programming = ["js", "python", "cpp", "rubby"]

for (const key in programming) {
    console.log(programming[key]);    
}

// const map1 = new Map()
// map1.set('IN', 'INDIA')
// map1.set('USA', 'UNITED STATES OF AMERICA')
// map1.set('Fr', 'France')
// map1.set('IN', 'INDIA')

// for (const key in map1) {
//     console.log(key);  
// } // map is not iterable


