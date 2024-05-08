

// Here it is implied that the result of evaluating x + y;
// will be returned from the function
let add = (x, y) => x + y;

/* A longer and identical form of writing the arrow function above is

let add = function(x,y) {
    return x + y;
}

*/

console.log("Calling add arrow function with 10 and 20 gives us ", add(10, 20)); // 30;


// If the arrow function body has multiple statements
// you must include braces and explicitly use the return keyword
let secondAdd = (x, y) => { 
    let sum = x + y;
    return sum; 
};

console.log("Calling secondAdd arrow function with 10 and 20 gives us ", secondAdd(10, 20)); // 30;

// arrow functions can also have a single parameter
let increase = (x) => x + 1;
console.log("Increasing 3 by 1 gives us ", increase(3));

// arrow functions can also have no parameters
let logDoc = () => console.log("Hello there !");
logDoc();

// demonstrating the setTimeout function with the
// callback function written in arrow function format
setTimeout(() => console.log('Execute later after 2 seconds'), 5000);
