
// An anonymous function is a function without a name
// We declare the function in the usual way but just without a name
// The declaration of an anonymous function is called a function expression
// The function can then be stored in a variable 
let doAddition = function(a, b) {
    let sum = a + b;
    return sum;
};
// To call the anonymous function stored in the variable
// we use the variable name in the usual way 

console.log("Adding 3 to 5 gives us ", doAddition(3, 5));

// The first parameter to this function is meant to be another function
function findAverage(addTwo, x, y) {
    // Here, we call the function that was passed in as a 
    // parameter
    let sum = addTwo(x, y);
    let average = sum / 2;
    return average;
}
// When we call findAverage, we must pass a function as the first argument
// Here we pass the anonymous function stored in doAddition
console.log("The average of 4 and 6 is ", findAverage(doAddition, 4, 6));



/* The setTimeoutfunction is used to set a count down timer. 
This function takes another function as its first parameter
and the number of milliseconds to countdown as its second parameter. 
When the countdown completes, the parameter function is executed. 
This parameter function is sometimes called a callback
*/

let callBack = function() {
    console.log('Execute later after 2 seconds');
}

setTimeout(callBack, 2000);

console.log("3 + 5 is ", 3 + 5);
console.log("Continued executing while waiting for timeout to complete");

/* Note that we could also have directly declared the anonymous callback function inside setTimeout like this:

setTimeout(function() {
    console.log('Execute later after 2 seconds')
}, 2000);

*/




