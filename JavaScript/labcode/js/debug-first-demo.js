
function isEmployeeTooOld(ageLimit) {

    let employee = {
        firstName: 'Clark',
        lastName: 'Kent',
        age: 33
    };
    
    if (employee.age > ageLimit) {
        console.log("Employee is too old !");
        return true;
    }
    else {
        console.log("Employee is still young !");
        return false;
    }
}



function sumNumbers(mixedArray) {

    let total = 0;
    for (let i = 0; i < mixedArray.length; i++) {

        if (typeof mixedArray[i] == 'number') {
            console.log("Found a number at position ", i);
            total += mixedArray[i]
        }

    }
    return total;
}


console.log("First demo of debugging session");

let globalNumber = 10;
let globalString = "peter";

console.log("Place your breakpoint at this point");

console.log("JavaScript is an awesome language");

globalNumber += 20;

globalString += ' parker';

for (let i = 1; i <= 5; i++) {
    let innerNumber = 100;
    console.log("Count : ", (innerNumber +i));
}

console.log("Exiting the loop and now ready to call isEmployeeTooOld");

let result = isEmployeeTooOld(70);

console.log("The value of result now is ", result);

let mixedArray = ['cat','dog', 3, 'mouse', 7, 11, 'rat'];

let finalTotal = sumNumbers(mixedArray);

console.log("The sum of all numbers in mixedArray is ", finalTotal);