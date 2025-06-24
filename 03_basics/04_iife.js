// Immediately Invoked Function Expressions (IIFE)

//NAMED IFFE
(function db(){
    console.log(`DB CONNECTED`);
    
})(); //semicolon is compulsory over here 

// UNAMED IFFE
(  (name) => {
    console.log(`DB CONNECTED 2 ${name}` )
})("Manashree");


// Definition:
// An IIFE is a function that runs immediately after it is defined.
//Why use IIFE?
// Avoid polluting the global scope.

// Create private variables.

// Run code immediately without calling it later.

