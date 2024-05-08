
// Arrays can contain elements of mixed type
let mixedArray = ['cat', 5, 'dog', true, 'mouse', 'rat', 3.6];

let animals = ['cat', 'dog', 'mouse', 'snake', 'rat'];

// Accessing elements in an array
console.log("First element in the animals array is ", animals[0]); 
console.log("Third element in the animals array is ", animals[2]); 

// Changing the value of an element
animals[2] = 'horse';
console.log("The new content of the animals array is");
console.log(animals);

// An array is an object and has the property length
// This gives us the number of elements in the array
console.log('The number of elements in the animals array is ', animals.length); 

// We can continue to add new elements to an array 
// by specifying the index positions for the new elements
animals[5] = 'elephant';
animals[6] = 'tiger';

console.log('The number of elements in the animals array is ', animals.length); 
console.log("The new content of the animals array is ");
console.log(animals);


/* To iterate through the elements of a loop, we can either
use a normal for loop or the shorter for..of loop syntax
 */

/* For a normal for loop, we will use the loop variable as the array index
Therefore it should start from 0 and go all the way until one less than the number of elements. 
 */

for (let x = 0; x < animals.length; x++) {
    console.log ("The animal at index position " +  x + " is " + animals[x]);
}

/* The for of loop is a shorter form which is useful
when the index of the array is not required to be used
in the body of the loop
 */

for (let x of animals) {
    console.log ("The current animal is ",  x);
}

/* Some basic operations that can be performed on an array
of numbers:
Find the sum / average of all the numbers
Find the largest / smallest number in the array
Find the numbers that are bigger or smaller than a specified number 
*/

let basicNumbers = [30, 50, -10, 80, 25, 60, 15, 42];

console.log("Finding the sum / average of the numbers in the array");

let sum = 0;
for (let number of basicNumbers) {
    sum += number;
}
console.log("The sum of all the numbers is : ", sum);
console.log("The average of all the numbers is : ", sum / basicNumbers.length);

// Finding the smallest / largest number in an array
let smallestNumber = basicNumbers[0];
let largestNumber = basicNumbers[0];
for (let number of basicNumbers) {
    if (smallestNumber > number) 
        smallestNumber = number;
    if (largestNumber < number) 
        largestNumber = number;
}
console.log("The largest number in the array is ", largestNumber);
console.log("The smallest number in the array is ", smallestNumber);

// Finding numbers in the array that are larger than 45

let newNumbers = [];
let indexNewNumbers = 0;
let numToCompare = 45;

for (let number of basicNumbers) {
    if (number > numToCompare) {
        newNumbers[indexNewNumbers++] = number;
    }
}

console.log("The numbers in the array that are larger than 45 are ");
console.log(newNumbers);
