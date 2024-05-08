

let age = 10;
age++; // Postfix increment operator
// The above is the shortcut for writing
// age = age + 1
console.log("Value of age after postfix increment : ", age);

let weight = 20;
++weight; // Prefix increment operator
// The above is the shortcut for writing
// weight = weight + 1
console.log("Value of weight after prefix increment : ", weight);

/* The difference between the prefix and postfix operators 
is that in the prefix, the increment operation is done BEFORE
the variable value is used in a mathematical expression, and 
in the postfix operator, the increment operation is done AFTER
the variable value is used in a mathematical expression */

age = 10;
console.log("Math expression output is ", age++ + 5);
/* The above is equivalent to writing:
console.log(age + 5);
age = age + 1;
*/
console.log("New value of age : ", age)

weight = 20;
console.log("Math expression output is ", ++weight + 5);
/* The above is equivalent to writing:
weight = weight + 1;
console.log(weight + 5);
*/
console.log("New value of weight : ", weight)

/* The prefix and postfix operators for the decrement operation
works in exactly the same way */

age = 10;
age--; // Postfix decrement operator
// The above is the shortcut for writing
// age = age - 1
console.log("Value of age after postfix decrement : ", age);

weight = 20;
--weight; // Prefix decrement operator
// The above is the shortcut for writing
// weight = weight - 1
console.log("Value of weight after prefix decrement : ", weight);

age = 10;
console.log("Math expression output is ", age-- + 5);
/* The above is equivalent to writing:
console.log(age + 5);
age = age - 1;
*/
console.log("New value of age : ", age)

weight = 20;
console.log("Math expression output is ", --weight + 5);
/* The above is equivalent to writing:
weight = weight - 1;
console.log(weight + 5);
*/
console.log("New value of weight : ", weight)
