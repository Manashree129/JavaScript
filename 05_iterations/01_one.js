// for

for (let x = 1; x <= 10; x++) {
    const element = x;
    if (element == 5){
        // console.log("5 is best number")
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(   `outer loop value ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`outer loop value ${j} and inner loop ${i}`)
        console.log(i + " * " + j + " = " + i*j);
         
    }   
}

let myArray = ["mumbai", "delhi", "pune"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++){
    if (index == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
       
}

for (let index = 1; index <= 20; index++){
    if (index == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
       
} // continue doesn't print that particular iteration







