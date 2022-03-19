
let greeting = "Good Morning!";
console.log('Length of greeting is ', greeting.length);  

let firstName = 'John ';
let lastName = 'Wick';
let fullName = firstName + lastName;

console.log("The full name is ", fullName); 

let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log("className is ", className);

let y = 3;
// Method #1 to convert a non-string to a string
let x = String(y);
console.log("The type of x is ", typeof x);

// Method #2 to convert a non-string to a string
let z = 'My favorite number is ' + y;
console.log(z);

// Method #3 to convert a non-string to a string
let w = y.toString();
console.log("The type of w is ", typeof w);


let fruits = "Apple, Banana, Kiwi";
let firstPart = fruits.slice(7, 13);
console.log("firstPart is ", firstPart);

let secondPart = fruits.substr(0, 5);
console.log("secondPart is ", secondPart);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log("newText is ", newText);

let upperText = text.toUpperCase();
let lowerText = text.toLowerCase();

console.log("upperText is ", upperText);
console.log("lowerText is ", lowerText);

let longText = "      Hello World!      ";
let trimText = longText.trim();
console.log("trimText is ", "*"+trimText+"*");

let firstChar = text.charAt(2);
console.log("firstChar is ", firstChar);

let microsoftLocation = text.indexOf("Microsoft");
console.log("Microsoft is found in text at location ", microsoftLocation);





