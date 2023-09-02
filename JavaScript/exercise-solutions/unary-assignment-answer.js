

/* Q1: Declare a variable and store a number value in it. Use that variable in a mathematical expression involving the prefix increment operator and output the result of the expression. Explain your result based on your understanding of how the operator works. */

let age = 20;
console.log("Incrementing age first and adding to 10 : ", ++age + 10);


/* Q2: Declare a variable and store a number value in it. Use that variable in a mathematical expression involving the postfix increment operator and output the result of the expression. Explain your result based on your understanding of how the operator works. */

let weight = 30;
console.log("Decrementing age after adding 10 to it : ", weight-- + 10);



/* Q3: Declare 3 variables and store random numbers into them. Use the += operator on any of the 2 variables, output and explain the result. */

let firstNum = 10;
let secondNum = 20;
let thirdNum = 30;

firstNum += secondNum;
console.log("Adding 10 to 20 gives ", firstNum);


/* Q4: Use the -= operator on any of the 2 previously declared variables, output and explain the result. */

thirdNum -= secondNum;
console.log("Subtracting 20 from 30 gives ", thirdNum);


/* Q5: Use the *= operator on any of the 2 previously declared variables, output and explain the result. */

thirdNum *= firstNum;
console.log("Multiplying 10 with 30 gives ", thirdNum);
