

/* Select any 2 questions from the correct solutions to for-loop-question.js
and implement it using a while or do-while loop */


//Q1
let singleNum = 5;
let factorial = 1;
let i = 1;
while (i <= singleNum) {
    factorial *= i;
    i++;
}
console.log("The factorial of " + singleNum + " is " + factorial);

//Q2

let x = 5;
let y = 20;
let z = 40;
let total = 0;
i = y;
while (i <= z) {
    if (i % x == 0)
        total += i;
    i++;    
}
console.log("The total for Q2 is ", total);