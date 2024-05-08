
console.log("For loop to count from 1 to 5");
// The variable i is called the loop counter / variable
// It keeps track of the number of times the loop body has being executed
for (let i = 1; i <= 5; i++) {
    // loop body can contain one or more statements
    console.log("Count : ", i);
}

console.log("For loop to count from 2 to 10 in increments of 2");
for (let i = 2; i < 11; i +=2 ) {
    console.log("Count : ",  i);
}

console.log("For loop to count backwards from 10 to 5");
for (let i = 10; i >4; i--) {
    console.log("Count : ",  i);
}

console.log("For loop to count backwards from 30 to 10 in decrements of 4");
for (let i = 30; i > 9; i -=4 ) {
    console.log("Count : ",  i);
}

/* A common use of the loop is to accumulate the sum of multiple values. For e.g. to find the sum of 1, 2, 3, 4, 5
*/

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("The sum of 1 to 5 is ", sum);

// Another simple use case: Calculate savings  with compounded interest over a certain number of years

let savings = 2000;
let years = 10;
let interestRate = 5; // this means 5%

for (let x = 1; x <= years; x++) {
    savings += savings * interestRate / 100;
    console.log("Accumated savings at the end of year " + x 
    + " is " + savings);
}

/* We can include if-else statements within the loop body
to perform implement specific logic
 */

console.log("First approach to printing all odd numbers between 1 and 10");
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

console.log("Second approach to printing all odd numbers between 1 and 10");
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1)
        console.log(i);
}

// Loops can be nested

for (let x = 1; x <= 3; x++) {
    console.log("In the outer loop, x is ", x);
    for (let y = 10; y <= 30; y += 10) {
        console.log("In the inner loop, y is ", y);
    }
}

// A simple use case for nested loops: Multiplication tables

for (let x = 10; x <= 13; x++) {
    console.log("**** Multiplication table for ", x);
    for (let y = 1; y <= 10; y ++) {
        console.log(x + ' x ' + y + " = " + (x * y) );
    }
}


/* Infinite loop
The loop condition is always true,
so the loop keeps running forever

Notice that the loop condition is always true, regardless of the value of x
Uncomment the code below to see an endless loop in action 
Press Ctrl-C to terminate the loop and exit to the shell
*/

/* for (let x = 5; x >= 2; x++) {
    console.log ("value of x is ", x);
} */


/* Miss by 1 loop
The loop condition is incorrectly written
resulting in the loop terminating 1 step earlier or later
than intended */

console.log("We want to run this loop 5 times, but it only runs 4 times due to incorrect loop condition")
for (let x = 1; x < 5; x++) {
    console.log ("value of x is ", x);
}

/* The correct way to write a loop that runs exactly 5 times
for (let x = 1; x <= 5; x++) {

for (let x = 1; x < 6; x++) { */

/* Local scope
Variables that are declared within the body of the loop
can only be accessed within the body of the loop
Once the loop is exited, the variables are no longer accessible */

console.log("This code below here works because the variable firstTotal is declared outside the body of the loop");
console.log("This means the variable is still accessible once the body of the loop is exited");

let firstTotal = 0;
for (let i = 1; i <= 5; i++) {
    firstTotal += i;
}
console.log("The sum of 1 to 5 is ", firstTotal);

console.log("This code below here no longer works because the variable sum is declared inside the body of the loop");
console.log("This means the variable is NO LONGER accessible once the body of the loop is exited");

for (let i = 1; i <= 5; i++) {
    let secondTotal = 0;
    secondTotal += i;
}
// Uncomment the statement below to see the error
// console.log("The sum of 1 to 5 is ", secondTotal);

