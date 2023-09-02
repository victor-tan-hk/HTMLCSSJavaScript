
/* The 3 main data types that we will use most often are 
number, string and boolean */

// Numerical values are number type
// Can include whole numbers 
// as well as numbers with fractional parts (also known as floating point numbers) 

let age = 35;
let salary = 2500.55;


// Text content is string type
let heroName = 'Batman';
let jobDescription = 'Fighting criminals in Gotham city';


// boolean type only can be true or false
let isMarried = false;
let doILoveShopee = true;
let willIStayAtShopeeForever = true;

// You can use the typeof operator to determine the type of value 
// stored in a variable

console.log("The data type of age is ", typeof age);
console.log("The data type of heroName is ", typeof heroName);
console.log("The data type of isMarried is ", typeof isMarried);

// JavaScript is a dynamically typed language
// You can store different value types in the same variable

age = 'Spiderman';
console.log("The latest value of age is ", age);
console.log("The latest data type of age is ", typeof age);

age = false;
console.log("The latest value of age is ", age);
console.log("The latest data type of age is ", typeof age);

// When you declare a variable, but do not initialize it
// it will have the value undefined.

let noValueHere;
//noValueHere = 35;
console.log("noValueHere contains ", noValueHere);        
console.log("The data type of noValueHere is ", typeof noValueHere); 


