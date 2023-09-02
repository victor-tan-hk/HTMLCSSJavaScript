
let result = 3 > 5;
console.log("Is 3 greater than 5 : The answer is ", result);

let firstNum = 10;

console.log("Is firstNum lesser than than 15 : The answer is ", firstNum < 15);

console.log ("Is firstNum greater than or equal to 10 : The answer is ", firstNum >= 10);

console.log ("Is firstNum lesser than or equal to 10 : The answer is ", firstNum <= 10);

// We should use the triple equality operator ===
// instead of double equality operator ==
console.log ("Is firstNum equal to 10 : The answer is ", firstNum === 10);

console.log ("Is firstNum not equal to 10 : The answer is ", firstNum !== 10);


result = 3 + 4 * 4 > 5 * (4 + 3) - 1;

console.log("Evaluating the expression  3 + 4 * 4 > 5 * (4 + 3) - 1 gives us ", result);

//Comparing strings involves comparing them character by character
// based on their corresopnding ASCII code
let myName = "Peter";
let anotherName = "peter";
console.log("Comparing Peter with Peter gives us ",myName === "Peter");
console.log("Comparing Peter with peter gives us ",myName === anotherName);

console.log ("Comparing Cat > cat gives us ", "Cat" > "cat");

console.log ("Comparing big > bag gives us ", "big" > "bag");

console.log ("Comparing cat > car gives us ", "cat" > "car");

// Using the && (AND), || (OR) and ! (NOT) operators
firstNum = 20;
let secondNum = 30;
result = (firstNum > 15) && (secondNum < 50);
console.log( "Evaluating (firstNum > 15) && (secondNum < 50) gives us ", result);

result = (firstNum === 10) && (secondNum >= 20);
console.log( "Evaluating (firstNum === 10) && (secondNum >= 20) gives us ", result);

result = (firstNum === 10) || (secondNum >= 20);
console.log( "Evaluating (firstNum === 10) || (secondNum >= 20) gives us ", result);

result = (firstNum === 10) || (secondNum >= 50);
console.log( "Evaluating (firstNum === 10) || (secondNum >= 50) gives us ", result);


result = !(firstNum === 10);
console.log( "Evaluating !(firstNum === 10) gives us ", result);

result = firstNum !== 10;
console.log( "Evaluating firstNum !=== 10 gives us ", result);

/* Both these expressions are equivalent
!(firstNum === 10);
firstNum !== 10; */

