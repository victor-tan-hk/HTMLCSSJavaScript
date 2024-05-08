
let age = 18;
let message;

/* if (age >= 16) {
  message = 'You can drive.';
} else {
  message = 'You cannot drive.';
}

console.log(message); */

// The ternary operator performs the equivalent of the if-else statement above

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message);

// Using ternary operator to decide between two output statements
let authenticated = true;
let nextURL = authenticated
  ? console.log('You will be redirected to admin area') : console.log('Access is denied');


//Using  two ternary operators in the same expression
let speed = 90;
let nextMessage = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log('Your speed is ', nextMessage);


/* 
The above is equivalent to the 
if (speed >= 120) {
  nextMessage = 'Too Fast';
} else if (speed >= 80) {
  nextMessage = 'Too Fast';
} else {
  nextMessage = 'Ok';
} */