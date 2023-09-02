
/* Declaring a function named AddTwoNumbers
The function accepts two parameters a and b
The body of the function adds the values of the two parameters
and stores the result into the variable sum
The contents of this variable (the result) is then 
returned from the function
*/

function addTwoNumbers(a, b) {
    let sum = a + b;
    return sum;
}

let result = addTwoNumbers(3, 5);
console.log("The result of adding 3 and 5 is ", result);

/* The function is called / invoked by specifying its name
Two arguments 3 and 5 are passed to its parameters a and b respectively
The single value returned from the function is stored in the variable result

By convention, we declare a function BEFORE we call / invoke it
 */


console.log("The result of adding 2 and 6 is ", addTwoNumbers(2,6));
console.log("The result of adding 10 and 20 is ", addTwoNumbers(10, 20));
// You can call the function as many times as you want in the main program
// Each time you call, you can pass different argument values


// This function finds the largest amongst 3 numbers

function findLargestNumber (a, b, c) {

    // You can have multiple return statements thoughout a function body
    // Everytime a return statement is encountered, 
    // the function is ended and the specified value is returned to the code that invoked the function
    
    if (a > b) {
        if (a > c) 
            return a;
        else
            return c;
    }
    if (b > c) 
        return b;
    else
        return c;
}

let myLargest = findLargestNumber(2, 6, 4);
console.log("The largest among 2, 6 and 4 is ", myLargest);
console.log("The largest among 70, 30 and 10 is ", findLargestNumber(70, 30, 10));


// This function does not have a return statement
// Therefore it does not return anything
function saySomething(message) {
    console.log(message);
}

/* If you try to store something from a function that 
doesn't return anything, the value will be undefined */
let myResult = saySomething('JavaScript is awesome !');
console.log("Value of myResult is ", myResult);


