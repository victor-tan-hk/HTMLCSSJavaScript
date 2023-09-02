
/* Q1: Declare 4 variables and store random numbers into all of them. Make sure 2 of these variables have identical values */

let firstNum = 10;
let secondNum = 20;
let thirdNum = 30;
let fourthNum = 20;


/* Q2: Use any 2 of these variables in an expression involving the <= operator and explain the result */
console.log("Is 20 less or equal than 10 ? ", secondNum <= firstNum);

/* Q3: Use any 2 of these variables in an expression involving the >= operator and explain the result */

console.log("Is 30 more or equal than 20 ? ", thirdNum >= secondNum);


/* Q4: Use any 2 of these variables in an expression involving the === operator and explain the result */

console.log("Is 30 equal to 20 ? ", thirdNum === fourthNum);

/* Q5: Declare 4 variables and store random strings into all of them. Make sure that 2 of these variables have the same string value. */

let firstHero = "superman";
let secondHero = "spiderman";
let thirdHero = "black widow";
let fourthHero = "spiderman";

/* Q6: Use any 2 of these string variables in an expression 
involving the <= operator and explain the result */

console.log ("Is firstHero less than or equal to secondHero in ASCII sequence ?", firstHero <= secondHero);

/* Q7: Use any 2 of these string variables in an expression involving the >= operator and explain the result */

console.log ("Is firstHero more than or equal to thirdHero in ASCII sequence ?", firstHero >= thirdHero);



/* Q8: Use any 2 of these string variables in an expression involving the === operator and explain the result */

console.log ("Does secondHero have the same content as fourthHero ? ", secondHero == fourthHero);



/* Q9: Use all 4 variables with numeric content from Q1 in an expression that uses the && operator as well as the === and <= operators. Explain your result */

let evalExpr = (firstNum === secondNum) && (thirdNum <= fourthNum);
console.log(evalExpr);

/* Q10: Substitute different variables into the previous expression (without changing the operators used) so that the final result is different from the original result (i.e. if the original result is false, the new result is true, and vice versa). */

evalExpr = (fourthNum === secondNum) && (thirdNum >= fourthNum);
console.log(evalExpr);




/* Q11: Use all 4 variables with numeric content in an expression that uses the || operator as well as the > and < operators. Explain your result */


evalExpr = (fourthNum > secondNum) || (thirdNum < fourthNum);
console.log(evalExpr);

/* Q12: Substitute different variables into the previous expression (without changing the operators used) so that the final result is different from the original result (i.e. if the original result is false, the new result is true, and vice versa). */

evalExpr = (fourthNum > firstNum) || (thirdNum < fourthNum);
console.log(evalExpr);