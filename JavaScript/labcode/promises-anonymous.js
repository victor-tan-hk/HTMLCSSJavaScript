
/* A Promise is an object that is created by calling the Promise function
with the new keyword and passing it a single function (the executor) as its
parameter. This function itself takes two function parameters: resolve and reject. */

console.log("Demonstrating Promises using anonymous function format");

// First example of a promise here demonstrates the simplest case
// where the promise resolves successfully
let firstPromise = new Promise(function (resolve, reject) {

    // simulating a successful response returned from the server
    setTimeout( function() { resolve("superman"); }, 2000);

});

firstSuccess = function (result) {
    console.log("The first value retrieved from the server is ", result);
}


console.log("Sending a request to a server to retrieve a value");

// The callback passed to the then method is used as the resolve parameter of the executor function descrribed earlier
console.log("Running first promise");
firstPromise.then(firstSuccess);


console.log("Doing something unrelated here");

// Second example of a promise here demonstrates the case
// where the promise can either resolve successfully or be rejected

let secondPromise = new Promise(function (resolve, reject) {

    // Change the value of this boolean variable
    // to see the difference between a succesfully resolved promise
    // and a rejected promise
    let serverSuccessfulResponse = true;

    if (serverSuccessfulResponse)
        // simulating a successful response returned from the server
        setTimeout(function() { resolve("spiderman"); }, 2000);
    else
        // simulating an unsuccessful response returned from the server
        // we create our own custom exception
        setTimeout(function() { reject(new Error("Invalid server response")); }, 2000);
});

// We could have reused firstSuccess, but here I define a second anonymous function
// to demonstrate the concept more clearly
secondSuccess = function (result) {
    console.log("The second value retrieved from the server is ", result);
}

handleFailure = function (error) {
    console.log("Something went wrong, and the error was :", error);
}


/* We now include an additional catch method call then is chained
on after the then method call. Then we pass a function to catch
then will specifically handle the exception that occurs when the 
promise fails to resolve.
*/
console.log("Running second promise with a catch");
secondPromise.then(secondSuccess).catch(handleFailure);

console.log("Doing more unrelated stuff here");

thirdSuccess = function (result) {
    console.log("The third value retrieved from the server is ", result);
}

handleEverythingElse = function() {
    console.log("This function always runs whether the promise resolves or is rejected !");
}

console.log("Running second promise with a catch and finally");
secondPromise.then(thirdSuccess).catch(handleFailure).finally(handleEverythingElse);

console.log("Doing extremely unrelated stuff here");

