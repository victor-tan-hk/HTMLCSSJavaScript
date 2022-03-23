
console.log("Using + on string converts it to a number");
let s = '10';
console.log(typeof +s);


console.log("Using + on boolean converts it to a 0 or 1");
let f = false, t = true;

console.log(+f); // 0
console.log(+t); // 1

console.log("Using + on object calls the valueOf() and/or toString() method to get the value to convert into a number");

let person = {
    name: 'John',
    toString: function () {
      return '25';
    },
  };
  
  console.log(+person);


console.log("Difference between postfix and prefix increment / decrement operators");

let weight = 90;
let prefixWeight = ++weight + 5;
console.log ("prefixWeight is ",prefixWeight);
console.log ("weight is ",weight);

weight = 90;
let postfixWeight = weight++ + 5;
console.log ("postfixWeight is ",postfixWeight);
console.log ("weight is ",weight);
