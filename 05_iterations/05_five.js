const coding = ["js", "java", "python", "rubby", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
    
// } )

// function PrintMe(item){
//     console.log(item);    
// }

// coding.forEach(PrintMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js",
    },
    {
        languageName: "java",
        languageFile: "java",
    },
    {
        languageName: "python",
        languageFile: "py",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
  
})


