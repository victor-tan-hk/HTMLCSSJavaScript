
// Standard if statement
let age = 18;
if (age >= 18) {
    console.log('You can sign up');
}


// Nested if statement
let state = 'CA';

if (state == 'CA') {
    if (age >= 16) {
        console.log('You can drive.');
    }
}

// Standard if - else statement
if (age >= 18) {
    console.log('You can sign up.');
} else {
    console.log('You must be at least 18 to sign up.');
}

// Standard if - else - if statement
// calculate the body mass index (BMI)

let weight = 70; // kg
let height = 1.72; // meter

let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);