let newNumbers = [];
let indexNewNumbers = 0;
let numToCompare = 40;
let basicNumbers = [60, 50, -10, 80, 25, 30, 15, 42];

for (let number of basicNumbers) {
    if (number > numToCompare) {
        newNumbers[indexNewNumbers++] = number;
    }
}


console.log(newNumbers);