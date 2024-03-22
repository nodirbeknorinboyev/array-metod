//  let numbers = [2, 5, -55, 1, 4];

//let isAllposit = numbers.every(number => number >=0);

//console.log(isAllposit);

// Filter metodi

// let filted = numbers.filter(function(number){
//     return number >=0;
// })
// console.log(filted);

let numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((accumlator, currentValue)=>{
    return accumlator + currentValue;
}, 0);
console.log(sum);


