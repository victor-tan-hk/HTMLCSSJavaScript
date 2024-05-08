
let numbers = [10, 20, 30, 40, 50];

// Lets say we want to create a new array 
// whose elements are produced by adding 5 to all 
// existing elements in the original array

let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] + 5;
}
console.log("The content of newNumbers is ", newNumbers);

/* 
We can use the map method of an array 
This accepts a single callback function as a parameter
Each element of the original array is passed as an argument to this function
The result returned from this function is added as
an element to a new array
The result is a new array with the same number of elements 
as the original array
Each element in the new array is a transformation of the corresponding
element in the original array
*/

// This callback function passed to map
// will add 5 to all elements of the original array
// The returned result is added to a new array
// which is the final outcome of the map method invocation
let myNumbers = numbers.map( function(x) {
    return x + 5;
});
console.log("The content of myNumbers is ", myNumbers);

// We can use an arrow function to further
// simplify the definition of the callback function

let someNumbers = numbers.map( x => x + 5);
console.log("The content of someNumbers is ", someNumbers);



/* The map method can be used in any kind of situation
to produce a new array with exactly the same number of elements 
as the original array, but with the new elements 
transformed in some way based on the callback function
*/

// Here we have an array of objects holding data about 3 employees
let employees = [
    { 
        firstName: 'Peter',
        lastName: 'Parker',
        age: 33,
        isMarried: false,
    },
    { 
        firstName: 'Diana',
        lastName: 'Prince',
        age: 40,
        isMarried: true,
    },
    { 
        firstName: 'Tony',
        lastName: 'Stark',
        age: 43,
        isMarried: false,
    },    
];

console.log("Employee array contents : ", employees);

// The callback function passed to map here
// extracts the values of the various properties in the objects
// and puts them into a single string which is returned as the result
// The new array is therefore an array of strings
let employeeInfo = employees.map( function(employee) {

    let details = employee.firstName + ' ' + employee.lastName;
    details += ' is ' + employee.age + ' years old and is ';
    if (employee.isMarried) 
        details += 'single';
    else
        details += 'married';
    return details;
});

console.log("Employee info contents : ", employeeInfo);

// Lets say we want to find all the numbers that are 
// less than 20 from the array below
numbers = [60, 17, 36, 44, 6, 11, 53];

/* 
We can use the filter method of an array 
This accepts a single callback function as a parameter
Each element of the original array is passed as an argument to this function
The result returned from this function is a boolean 
If it is true, the original element is added to the new array
If it is false, the original element is excluded
The final result is a new array that contains lesser elements
than the original array
However, the elements are not transformed,
as they would be in the case of map
*/

console.log("Original numbers are ", numbers);
let smallNumbers = numbers.filter( function(x) {
    return x < 20;
});
console.log("The content of smallNumbers is ", smallNumbers);

// The above callback function could also have been rewritten as an arrow function
let theNumbers = numbers.filter( x => x < 20);
console.log("The content of theNumbers is", theNumbers);

// Finding employees that are married / single
let marriedEmployees = employees.filter( x => x.isMarried);
console.log("The content of marriedEmployees is", marriedEmployees);
let singleEmployees = employees.filter( x => !x.isMarried);
console.log("The content of singleEmployees is", singleEmployees);

// Finding employees that are 40 years or younger
let youngEmployees = employees.filter( x => x.age <= 40);
console.log("The content of youngEmployees is", youngEmployees);


