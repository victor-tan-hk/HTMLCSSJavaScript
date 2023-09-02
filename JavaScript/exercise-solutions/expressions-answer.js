


/* Q1: Declare a variable and store the result of any mathematical expression involving the + operator into that variable */

let num = 10 + 12;


/* Q2: Declare another variable and store the result of any mathematical expression involving the / operator into that variable */

let result2 = 10 / 2;


/* Q3: Declare 2 variables, store any number you wish into both of them. Then,  create a mathematical expression using any operator involving these two variables and store the result 
into a new variable. */

let red = 5;
let blue = 10;
let colour = red + blue;


/* Q4: Create a mathematical expression that uses the previous 2 variables as well as any other random numbers and the 4 arithmetic operators (+, -, /, *). Store the result of the expression into a newly declared variable and output it.  */

result2 = red + num / (blue / red)
console.log("The result is ", result2);

/* Q5: Explain the effect of operator precedence on the result of the previous question. */



/* Q6: Create a suitable mathematical expression that will find the average of the values stored in the 4 variables used so far. Store the result in a new variable and output it. */

let avg = (num + result2 + red + blue) / 4;
console.log("The result is ", avg);



/* Q7: Choose any of the previous variables, add a random number to it and store the result back into the same variable. Display the new value of that variable */

blue = blue + 5;
console.log("The latest value of blue is ", blue);


/* Q8: Write a mathematical expression using the % operator and any 2 variables from the one used so far. Display and explain the result. */

console.log("22 divided by 5 gives us the remainder of ", num % red);


/* Q9: Create 3 variables and store random string values into all of them. */

let firstMonth = 'Jan';
let secondMonth = 'Feb';
let thirdMonth = 'Mar';

/* Q10: Create an expression that concatenates the contents of all the previous 3 variables, and output the result. */

let allMonths = firstMonth + ' ' + secondMonth + ' ' + thirdMonth;
console.log(allMonths);