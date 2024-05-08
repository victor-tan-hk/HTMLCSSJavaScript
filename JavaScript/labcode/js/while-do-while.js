
/* This is the original for loop to count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Count : ", i);
} */

console.log("while loop to count from 1 to 5");
// The variable i is called the loop counter / variable
// We initialize it outside the loop body
let i = 1;
while (i <= 5) {
  console.log("Count : ", i);
  i++; // Increment loop variable in the loop body
}

/* This is the original for loop to count from 1 to 10 in increments of 2 
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
} */
console.log("while loop to count from 2 to 10 in increments of 2");
i = 2;
while (i <= 10) {
  console.log("Count : ", i);
  i += 2; // Increment loop variable in the loop body
}


/* This is the original for loop to count backwards from 30 to 10 in decrements of 4
for (let i = 30; i > 9; i -=4 ) {
    console.log("Count : ",  i);
}
 */

console.log("while loop to count backwards from 30 to 10 in decrements of 4");
i = 30;
while (i >= 10) {
  console.log("Count : ", i);
  i -= 4; // Increment loop variable in the loop body
}

/* In the examples below, both the do-while and while loop perform exactly the same */

console.log("Demonstrating basic while loop");
i = 1;
while (i <= 5) {
  console.log("Count : ", i);
  i++; // Increment loop variable in the loop body
}

console.log("Demonstrating basic do-while loop");
i = 1;
do {
  console.log("Count : ", i);
  i++; // Increment loop variable in the loop body
} while (i <= 5);



console.log("Demonstrating basic while loop when the loop condition is initially false");
i = 10;
while (i <= 5) {
  console.log("Count : ", i);
  i++; // Increment loop variable in the loop body
}

console.log("Demonstrating basic do-while loop when the loop condition is initially false");
i = 10;
do {
  console.log("Count : ", i);
  i++; // Increment loop variable in the loop body
} while (i <= 5);
