/* Q1. The factorial of a number x! is the product of all whole numbers from the chosen number down to 1.
For e.g. 
4! = 4 x 3 x 2 x 1 = 24
7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
Find the factorial of a number that is stored in a variable */

// stores the number to find the factorial of
let singleNum = 4;
let factorial = 1;
for (let i = 1; i <= singleNum; i++) {
    factorial *= i;
}
console.log("The factorial of " + singleNum + " is " + factorial);



/* Q2. Create three variables x, y and z (you can give them other names if you wish). 
Calculate the total of all numbers perfectly divisible by x that are between y and z. 
For e.g. if  x is 5, and y and z are 20 and 40 respectively, then the total = 20 + 25 + 30 + 35 + 40.  
 */

let x = 5;
let y = 20;
let z = 40;
let total = 0;
for (let i = y; i <= z; i++) {
    if (i % x == 0)
        total += i;
}
console.log("The total for Q2 is ", total);





/* Q3. The ^ sign is used to indicate the use of power (for e.g. 2^3 means 2 x 2 x 2 which gives us 8). Write a program that creates the output below:

n n^2 n^3 n^4
1 1   1   1
2 4   8   16
3 9   27  81
4 16  64  256
5 25  125 625 

Hint: You need to use nested loops. 
You can use the \t escape character for tabs to space out the words and numbers in the display
*/

console.log();
console.log("n \tn^2 \tn^3 \tn^4");
for (let i = 1; i <= 5; i++) {
    let lineToShow = '';
    let product = 1;
    for (let y = 1; y <= 4; y++) {
        product *= i;
        lineToShow += "" + product + "\t";
    }
    console.log(lineToShow);
}



/* Q4. Create a variable and store a number in it. This number will determine the output pattern to be displayed as follows:
If the number is 3, the output to be displayed is :

*  
* *  
* * *

If the number is 4, the output to be displayed is :

*  
* *  
* * *
* * * *

If the number is 5, the output to be displayed is :

*  
* *  
* * *
* * * *
* * * * *

Write a program to accomplish this. */


let numLines = 5;
for (let i = 1; i <= numLines; i++) {
    let lineToShow = "";
    for (let j = 1; j <= i; j++) {
        lineToShow += "*";
    }
    console.log(lineToShow);
}