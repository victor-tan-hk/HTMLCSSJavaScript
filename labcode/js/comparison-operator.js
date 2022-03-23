
/* When comparing strings we are comparing them character by character 
based on the numeric code for the character in the ASCII character set
https://www.rapidtables.com/code/text/ascii-table.html */

let name1 = 'alice', name2 = 'bob';    

let result = name1 < name2;
console.log(result);

let f1 = 'apple', f2 = 'Banana';
result = f2 < f1;
console.log(result); // true

result = f2.toLowerCase() < f1.toLowerCase();
console.log(result); // false

console.log("When comparing numeric with non-numeric operands, JavaScript implicitly converts the non-numeric operand to a number");
console.log(10 < '20'); // true
console.log(10 == '10'); // true

console.log("When working with objects, we either use the valueOf() or toString method to return a value for comparison");
let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };
console.log(apple > 10); // false
console.log(orange == 20); // true

console.log("For the > and < operators with Boolean values, true is converted to 1 and false is converted to 0");
console.log(true > 0); // true
console.log(false < 1); // true

