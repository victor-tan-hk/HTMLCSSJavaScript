
console.log ("Using an arrow function as a shorter form of of a function expression");

// Here it is implied that the result of evaluating x + y;
// will be returned from the function
let add = (x, y) => x + y;
console.log(add(10, 20)); // 30;

// Using braces for the body of the arrow function
// requires that you use the return keyword
add = (x, y) => { return x + y; };

// arrow functions with a single parameter
increase = (x) => x + 1;
console.log(increase(3));

// arrow functions with no parameters
let logDoc = () => console.log("Hello there !");
logDoc();


// An anonymous function returning an object with a single property
let setColor = function (color) {
    return {value: color}
};

let backgroundColor = setColor('Red');
console.log(backgroundColor.value); // "Red"


// arrow functions and object literal
//you need to wrap the object literal in parentheses
setColor = color => ({value: color });
backgroundColor = setColor('Red');
console.log(backgroundColor.value); // "Red"


