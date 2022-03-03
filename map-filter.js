const numbers = [3, 4, 5, 6, 7, 8];
// output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const squre = element * element;
//     output.push( squre);
    
// }


// const result = numbers.map(function (element){
//  return element * element;
 
// })
// 

// const result = numbers.map(element => element * element);

// console.log(result);

// 

// filter

const result = numbers.filter(element => element > 5);
console.log(result)
