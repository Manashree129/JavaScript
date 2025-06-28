// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10 )

// console.log(newNums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = [];

// myNumbers.forEach((num) => {
//   newNums.push(num + 10);
// });

//To achieve the same result using forEach instead of map, you'll need to create a new array manually and push each modified element into it — because forEach does not return a new array like map does.


const newNums = myNumbers
                .map(  (num) => num * 10 )
                .map((num) => num + 1)
                .filter( (num) => num >=40)

console.log(newNums);








