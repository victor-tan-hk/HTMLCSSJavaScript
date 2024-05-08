
/* The conditional expression can use any of the comparison and logical operators that we have seen so far
It will evaluate to either a true or false
If it evaluates to true, the statement immediately below it will be executed
If it evaluates to false, the statement immediately below it will be skipped
Regardless of whether the statement immediately below it is executed,
program execution continues with the next statement in sequence */

// Change the value of age so that the expression becomes false
// and see what happens
let age = 18;
if (age >= 18) 
  console.log('You can vote. Yay !!');

console.log("This statement is always executed regardless of the outcome");

/* You can use the { } to group together a block of statements that will be executed if the conditional statement evaluates to true.
The statements within a  block are conventionally indented by a tab/several spaces to indicate their placement
 */
let salary = 2000;
if (salary < 5000) {
  console.log("I need to borrow some money from my parents");
  console.log("I wonder whether they will give it to me");
  console.log("I will throw a temper tantrum if they don't !");
}

console.log("Why is money so important ?");



// Standard if - else statement
age = 18;
if (age >= 18) {
    // This statement is executed if the condition is true
    console.log('You can vote. Yay !');
} else {
    // This statement is executed if the condition is false
    console.log('Bummer ! I cannot vote. Hate that !');
}

console.log("Why bother to vote - all political parties are the same, mah !");


isItRaining = true;
myName = "ironman";
if (isItRaining && myName === "ironman") {
  
  // All statements are executed in this block if the condition is true
  console.log("I will just put on my new nanotech suit");
  console.log("and fly out to Burger King to get lunch");
} else {

    // All statements are executed in this block if the condition is false
  console.log("I wish i had a nanotech suit");
  console.log("or it was raining so that I could show it off !");

}

console.log("You are spending too much time watching MCU movies - get a life, man !");



let bmi = 21;
let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Normal';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else if (bmi >= 30 && bmi <= 34.9) {
  weightStatus = 'Obese';
} else if (bmi >= 35 && bmi <= 39.9) {
  weightStatus = 'Severely obese';
} else if (bmi > 40) {
  weightStatus = 'Morbidly obese';
}

console.log("Your weight classification is ", weightStatus);

// You can also have a final else in an if-else-if to cater for situations where none of the previous conditions are true
let weatherStatus = "something funny";
if (weatherStatus === 'rainy') {
  console.log("I will order food online from Grab");
} else if (weatherStatus === 'sunny') {
  console.log("I will go out and have lunch with my friends");
} else if (weatherStatus === 'cloudy') {
  console.log("I jog around the neighbourhood");
} else {
  console.log("I will just watch Netflix");
}