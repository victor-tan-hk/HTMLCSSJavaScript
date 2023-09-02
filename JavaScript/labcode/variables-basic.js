
// Declaring a variable with the name message
// This uses the older form var from ES5
var message;

// Storing text content in the variable
// This is called initializing the variable

message = 'Shopee is my favourite company to work for';

// Declaring a variable and initializing it using a single statement
var job = "Awesome Shopee employee";

// Using the let keyword instead of var: from ES6
// Here we are storing a number instead of text output
let days = 30;

// You can declare and initialize multiple variables in a single statement
// by separating the declaration and initialization with commas

/* let greeting = "hello";
let counter = 100; */


let greeting = "Hello", counter = 100;

/* You can display the value or content of a variable
by including it after comma in the text output in
console.log */

console.log("The value of greeting is : ", greeting);

console.log("The value of counter is : ", counter);

// You can store new content or value into a variable 
// after its initialization
// You don't have to use the keyword let anymore 
// when you are storing new content after initialization

greeting = "Its a nice day";
counter = 200;


console.log("The latest value of greeting is : ", greeting);

console.log("The latest value of counter is : ", counter);

// A constant holds a value that cannot change after its initialization
// Attempting to change it results in a syntax error

const age = 30;

// Uncomment out the statement below to see what happens
//age = 45;

// Always try to use meaningful variable names

// These variable names are not meaningful
let x = 'HR Manager';
let y = 3500;


// These variable names are meaningful and use camelCase
let jobTitle = 'HR Manager';
let salary = 3500;



