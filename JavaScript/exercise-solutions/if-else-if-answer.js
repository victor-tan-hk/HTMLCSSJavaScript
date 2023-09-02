
/* Q1: Create two variables and store random numbers in them (which can be either 0, positive or negative). Display the larger of these two numbers, and if they are equal, indicate that as well.
 */

// Modify the value of these 2 variables below to check the logic
let firstNum = 10;
let secondNum = -5;

if (firstNum === secondNum) {
    console.log("Both numbers are exactly identical");
} else if (firstNum > secondNum) {
    console.log("The larger number of the two is ", firstNum);    
} else 
    console.log("The larger number of the two is ", secondNum);    




/* Q2: Create two variables and store random numbers in them (which can be either 0, positive or negative). Display the sign of the multiplication product of the two numbers. For e.g. if the first number is +ve and the second number is -ve, then the multiplication product is -ve (so you display the message negative or -ve). For your solution, you can write a statement to multiply the two variables using the * operator
 */

// Modify the value of these 2 variables below to check the logic

firstNum = 10;
secondNum = -5;

let result = firstNum * secondNum;
if (result > 0) 
    console.log("The product is positive");
else if (result < 0) 
    console.log("The product is negative");
else
    console.log("The  product is zero");



/* Q3: Repeat Q2 but WITHOUT using a statement to multiply the two variables using the * operator
 */

// Modify the value of these 2 variables below to check the logic

firstNum = 10;
secondNum = 5;
if ((firstNum > 0 && secondNum > 0) || (firstNum < 0 && secondNum < 0))
    console.log("The product is positive");
else if ((firstNum > 0 && secondNum < 0) || (firstNum < 0 && secondNum > 0))
    console.log("The product is negative");
else
    console.log("The product is zero");



/* Q4: Create 3 variables and store random numbers in them (which can be either 0, positive or negative). Display the variable with the largest value
 */

// Modify the value of these 3 variables below to check the logic

firstNum = 10;
secondNum = 5;
let thirdNum = 20;

if (firstNum > secondNum) {
    if (firstNum > thirdNum) 
        console.log("The largest number is ", firstNum);
    else     
        console.log("The largest number is ", thirdNum);
} else {
    if (secondNum > thirdNum) 
        console.log("The largest number is ", secondNum);
    else     
        console.log("The largest number is ", thirdNum);
}

/* Q5: Repeat Q4 except now display the variable with the smallest value
 */

// Modify the value of these 3 variables below to check the logic

firstNum = 20;
secondNum = 5;
thirdNum = 10;

if (firstNum < secondNum) {
    if (firstNum < thirdNum) 
        console.log("The smallest number is ", firstNum);
    else     
        console.log("The smallest number is ", thirdNum);
} else {
    if (secondNum < thirdNum) 
        console.log("The smallest number is ", secondNum);
    else     
        console.log("The smallest number is ", thirdNum);
}



/* Q6: Create 3 variables and store random numbers in them (which can be either 0, positive or negative). Print out the variables in ascending order of their values (from smallest to largest)
 */

// Modify the value of these 3 variables below to check the logic

firstNum = 10;
secondNum = 20;
thirdNum = 5;

console.log("Printing in ascending order");
if (firstNum < secondNum) {
    if (firstNum < thirdNum) {
        console.log(firstNum);
        if (secondNum < thirdNum) {
            console.log(secondNum);
            console.log(thirdNum);
        } else {
            console.log(thirdNum);
            console.log(secondNum);

        }
    }
    else {
        console.log(thirdNum);
        console.log(firstNum);
        console.log(secondNum);
    }    
} else {
    if (secondNum < thirdNum) {
        console.log(secondNum);
        if (firstNum < thirdNum) {
            console.log(firstNum);
            console.log(thirdNum);
        } else {
            console.log(thirdNum);
            console.log(firstNum);

        }
    }
    else {
        console.log(thirdNum);
        console.log(secondNum);
        console.log(firstNum);
    }    
}




/* Q7: Repeat Q6 but print in descending order (largest to smallest)
 */

// Modify the value of these 3 variables below to check the logic

firstNum = 20;
secondNum = 10;
thirdNum = 5;

console.log("Printing in descending order");
if (firstNum > secondNum) {
    if (firstNum > thirdNum) {
        console.log(firstNum);
        if (secondNum > thirdNum) {
            console.log(secondNum);
            console.log(thirdNum);
        } else {
            console.log(thirdNum);
            console.log(secondNum);

        }
    }
    else {
        console.log(thirdNum);
        console.log(firstNum);
        console.log(secondNum);
    }    
} else {
    if (secondNum > thirdNum) {
        console.log(secondNum);
        if (firstNum > thirdNum) {
            console.log(firstNum);
            console.log(thirdNum);
        } else {
            console.log(thirdNum);
            console.log(firstNum);

        }
    }
    else {
        console.log(thirdNum);
        console.log(secondNum);
        console.log(firstNum);
    }    
}




/* Q8: The algorithm for calculating whether a year is a leap year or not is outlined here:

https://www.wikihow.com/Calculate-Leap-Years

Create a variable to store a year as a number, and then indicate whether the year is a leap year or not
 */

let year = 2004;

if (year % 4 == 0) { // Rule 2
    if (year % 100 == 0) { // Rule 3
        if (year % 400 == 0) // Rule 4
            console.log("Definitely a leap year !");
        else 
            console.log("Not a leap year !");
    }
    else
        console.log("Definitely a leap year !");
} else 
    console.log("Not a leap year !");



