
let name = 'John';
let age = 25;

let person = {
    name: 'John',
    age: 25,
};

/* When you assign a primitive value from one variable to another, the JavaScript engine creates a copy of that value and assigns it to the variable. */ 
let newAge = age;

newAge = newAge + 1;
// Value of age remains the same
console.log("age and newage are", age, newAge);


/* When you assign an object from one variable to another, the JavaScript engine makes both variables point to the same object. It DOES NOT create a new object */ 

let member = person;

member.age = 26;

// Since both person and member are referencing the same object
// they both print out the same contents
console.log("Person is ", person);
console.log("Member is ", member);

/* The same comments apply as well to passing arguments to function parameters.
When we are passing primitive values (number, boolean, string, etc) to a function parameter, 
we are making a copy. 
 */
function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log("Result is " , result); // 100 
console.log("y is ", y); // 10 -- no change

/* When we are passing object references to a function parameter, we are making a copy of the reference
BUT both argument and parameter variables are still pointing to the SAME object.
*/

console.log("The current content of Person is now ", person);

function increaseAge(obj) {
    obj.age += 10;
}
  
increaseAge(person);
  
console.log("The new content of Person is now ", person);

/* If in the body of the function, we make the parameter
point to a new object, the original variable will still be pointing to the original object */

function anotherIncrease(obj) {
    obj.age += 10;
    obj = { name: 'Jane', age: 22 }
}

anotherIncrease(person);
  
console.log("The new content of Person is now ", person);
