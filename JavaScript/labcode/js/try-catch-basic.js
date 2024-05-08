
// Uncomment the function below when needed 
// so that the call to do doAddition does not result in an exception

/* function doAddition(a, b) {
    return a + b;
} */


// When you run the statement below a runtime exception occurs
// Comment out both statements to allow the rest of the program to run

let result = doAddition(10, 20);
console.log(result);

console.log('Demonstrating basic try-catch block');
try {
    let result = doAddition(10, 20);
    console.log("Adding 10 to 20 gives :",result);
} catch (err) {
    // We can access properties on the err object to get more info on the error
    console.log('The error that has occurred is :', err.name);
    console.log('The detailed message for that error is :', err.message);
}

console.log('Exited the try-catch block');

console.log('Demonstrating basic try-catch-finally block');


try {
    let result = doAddition(30, 40);
    console.log("Adding 30 to 40 gives :",result);
} catch (err) {
    console.log('The error that has occurred is :', err.name);
} finally {
    console.log("This part is always executed whether an exception occurs or not");
}

console.log('Exited the try-catch-finally block');
