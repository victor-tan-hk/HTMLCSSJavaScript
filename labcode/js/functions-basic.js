
function addTwoNumbers(a, b) {
    return a + b;
}


function findLargestNumber (a, b, c) {
    if (a > b) {
        if (a > c) 
            return a;
        else
            return c;
    }
    if (b > c) 
        return b;
    else
        return c;
}

function saySomething(message) {
    console.log(message);
}

let myAddition = addTwoNumbers(3, 5);
console.log("Adding 3 and 5 gives me ", myAddition);

let myLargest = findLargestNumber(2, 6, 4);
console.log("The largest among 2, 6 and 4 is ", myLargest);

let myResult = saySomething('JavaScript is awesome !');
console.log("Value of myResult is ", myResult);


