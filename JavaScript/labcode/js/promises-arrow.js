
console.log("Demonstrating Promises using arrow function format");

// First example of a promise here demonstrates the simplest case
// where the promise resolves successfully
let firstPromise = new Promise( (resolve, reject) => {

    // simulating a successful response returned from the server
    setTimeout( () => resolve("superman"), 2000);

});

console.log("Sending a request to a server to retrieve a value");

// The callback passed to the then method is used as the resolve parameter of the executor function descrribed earlier
console.log("Running first promise");
firstPromise.then(result => console.log("The first value retrieved from the server is ", result));


console.log("Doing something unrelated here");

// Second example of a promise here demonstrates the case
// where the promise can either resolve successfully or be rejected

let secondPromise = new Promise( (resolve, reject) => {

    // Change the value of this boolean variable
    // to see the difference between a succesfully resolved promise
    // and a rejected promise
    let serverSuccessfulResponse = true;

    if (serverSuccessfulResponse)
        // simulating a successful response returned from the server
        setTimeout(() => resolve("spiderman"), 2000);
    else
        // simulating an unsuccessful response returned from the server
        // we create our own custom exception
        setTimeout(() =>  reject(new Error("Invalid server response")), 2000);
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
secondPromise
.then(result => console.log("The second value retrieved from the server is ", result))
.catch(error => console.log("Something went wrong, and the error was :", error));

console.log("Doing more unrelated stuff here");

console.log("Running second promise with a catch and finally");
secondPromise
.then(result => console.log("The third value retrieved from the server is ", result))
.catch(error => console.log("Something went wrong, and the error was :", error))
.finally(() => console.log("This function always runs whether the promise resolves or is rejected !"));

console.log("Doing extremely unrelated stuff here");

console.log("Demonstrating chaining of 3 callbacks from a promise");

secondPromise
.then( result =>  {
    console.log("The fourth value retrieved from the server is ", result);
    // Some extra processing to produce a new result
    // which is passed on to the parameter of the next chained callback
    let moreHeroes = result + " and superman ";
    return moreHeroes;
})
.then( moreHeroes =>  {
    console.log("The second callback gets the value  ", moreHeroes);
    // Some extra processing to produce a new result
    // which is passed on to the parameter of the next chained callback
    let coolHeroes = moreHeroes + " and thor ";
    return coolHeroes;
})
.then( coolHeroes =>  {
    // No more callbacks chained after this
    // Just print out the final value received
    console.log("The third and final callback gets the value  ", coolHeroes);
});
