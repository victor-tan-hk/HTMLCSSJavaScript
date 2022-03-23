
console.log("Using double negation is the same as using the Boolean function");

let myNum = 10; //truthy value
let myStr = ''; // falsy value

console.log(Boolean(myNum));
console.log(!!myNum);

console.log(Boolean(myStr));
console.log(!!myStr);

console.log("Using && operator on boolean operands returns the normal truth table result");

let a = false;
let b = true;
let c = true;
let result = a && b;
console.log("a && b is ",result);
result = b && c;
console.log("b && c is ",result);

console.log("Using && operator on non-boolean operands follows this rule");

console.log ("Starting from left and moving to the right, return the first operand that is falsy. If no falsy operand was found, return the latest operand.");

result = 'cat' && 'dog' && 0 && 'fish';
console.log(result); // 0 because 0 is the first operand with falsy value

result = 'cat' && 3 && [] && 'fish';
console.log(result); // 'fish' because there is no operand with falsy value, so return last operand


console.log("Using || operator on boolean operands returns the normal truth table result");

a = true;
b = false;
c = false;
result = a || b;
console.log("a || b is ",result);
result = b || c;
console.log("b || c is ",result);

console.log("Using || operator on non-boolean operands follows this rule");

console.log ("Starting from left and moving to the right, return the first operand that is truthy. If no truthy operand was found, return the latest operand.");

result = 0 || '' ||  'cat' || 'fish';
console.log(result); // cat is the first truthy operand

result = 0 || '' ||  false || NaN;
console.log(result); // all values are falsy, so return the last operand

// Using && as a shortcut to obtain a nested property value when we do not know whether the parent properties are initialized or not.

let person = {
    name : 'Superman',
    address : {
        street : 'Metropolitan St',
        number : 234
    }
}

/* Instead of writing the longer form of this
if ((person != undefined) && (person.address != undefined))
    findValue = person.address.street;
We can write it as: */

let findValue = person && person.address && person.address.street;
console.log("findValue when the required property exists is ", findValue); 

let secondPerson = {
    name : 'Spiderman'
}

findValue = secondPerson && secondPerson.address && secondPerson.address.street;
console.log("findValue when the required property does not exist is ", findValue); 

// Error would have occurred if you attempted to directly access a  property on undefined
// Comment out the statement below

//console.log(secondPerson.address.street);

let thirdPerson = {
    name : 'Ironman',
    age : 44
}

console.log("Using || operator to return default value for a property if it does not exist")
console.log(thirdPerson.age || 100); // returns 44 since there is an age property
console.log(secondPerson.age || 100); // returns 100 since there is NO age property
