
// First evaluate the expression on the right hand side
// Then store the result of the expression on the right hand side 
// into the variable on the left hand side
let result = 3 + 5;
console.log ("3 + 5 gives us ", result);

result = 6 * 2;
console.log ("6 x 2 gives us ", result);

result = 5 - 4;
console.log ("5 - 4 gives us ", result);

let firstNum = 10;
let secondNum = 20;

result = firstNum + 5;
console.log ("Adding 5 to content of firstNum gives us ", result);

result = firstNum + secondNum;
console.log("Adding the content of firstNum and secondNum gives us ", result);


// Demonstrating operator precedence 

result = firstNum + secondNum * 30;
console.log("10 + 20 * 30 gives us ", result);

result = 100 + 200 / firstNum - 3 * 10;
console.log("100 + 200 / 10 -3 * 10 gives us ", result);

result = 1 + ((3+1)/(8-4) - 5);
console.log("1 + ((3+1)/(8-4) - 5) gives us ", result);

// we can use a variable on the expression on the right hand side
// and then store the result of the expression into the same variable again

console.log("current value of firstNum is ",firstNum);
firstNum = firstNum + 50;
console.log("new value of firstNum is ",firstNum);

firstNum = firstNum + secondNum;
console.log("new value of firstNum is ",firstNum);

/* The remainder operator gives the remainder from an integer division
For e.g.    14 divided by 3 gives 4 with a remainder of 2 
4 * 3 = 12, 12 + 2 = 14
14 % 3 = 2
33 divided by 5 gives 6 with a remainder of 3
5 * 6 = 30, 30 + 3 = 33
33 % 5 = 3
 */

console.log("Demonstrating the use of the remainder % operator");
console.log("14 % 3 is ", 14 % 3);
console.log("33 % 5 is ", 33 % 5);

/* Remainder operator is useful to determine when a number 
is fully divisible by another number. 
For e.g. even numbers are fully divisible by 2, so their remainder is always 0. Odd numbers will always give a remainder of 1 when divided by 2 */

console.log("For even numbers, remainders from division by 2 is always 0");
console.log("10 % 2 is ", 10 % 2);
console.log("16 % 2 is ", 16 % 2);

console.log("For odd numbers, remainders from division by 2 is always 1");

console.log("11 % 2 is ", 11 % 2);
console.log("17 % 2 is ", 17 % 2);

// You can concatenate two strings using the + operator

let firstName = 'John';
let lastName = ' Wick';
let fullName = firstName + lastName;
console.log("My name is ", fullName);

fullName = firstName + ' likes to eat durians everyday with ' + lastName;

console.log(fullName);
