
console.log("Once a string is converted to a number, it can be used in any standard mathematical expression");
let myString = '20' 
console.log(10 + parseInt(myString)); // 30

console.log("Using parseInt on a decimal number rounds it to the nearest integer value");
let a = 12.22
console.log(parseInt(a)); 

console.log("Using the Number constructor function");
let b= Number("10.22");
console.log(15 + b); 

console.log("Using unary operator");
const x = 25;
const y = -25;
console.log(+x); // expected output: 25
console.log(+y); // expected output: -25

console.log("Using parseFloat");
console.log (x + parseFloat("10.33"));

console.log("Using Math.floor");
a = 12.22
Math.floor(a) // expected result: 12
