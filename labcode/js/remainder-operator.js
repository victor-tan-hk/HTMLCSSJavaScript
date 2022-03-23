
console.log("Using remainder operator with positive dividend ");
let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

console.log("Using remainder operator with negative dividend ");
remainder = -5 % 3;
console.log(remainder); // -2

remainder = -5 % -3;
console.log(remainder); // -2

console.log("Using the remainder operator to check if a number is an odd number");
let num = 13;
let isOdd = num % 2;
if (isOdd) {
    console.log("num is an odd number !");
}