

console.log("Demonstrating async-await as an easier way to use promises");

// Promise is still created in the usual manner

let firstPromise = new Promise( (resolve, reject) => {

    // simulating a successful response returned from the server
    setTimeout( () => resolve("superman"), 2000);

});

// Using async before the function implies that the 
// function body will contain the use of await keyword
async function firstExample() {

    // wait here until firstPromise completes
    let result = await firstPromise; 

    console.log("The value retrieved from the first server is ", result);

}

console.log("Demonstrating sending a request to the first server to retrieve a value");
firstExample();


function getResponseSecondServer(heroName) {

    return new Promise( (resolve, reject) => {
        // simulating a successful response returned from the second server
        setTimeout( () => resolve(heroName + " likes spiderman"), 2000);
    
    });
}


function getResponseThirdServer(heroPreference) {

    return new Promise( (resolve, reject) => {
        // simulating a successful response returned from the third server
        setTimeout( () => resolve(heroPreference + " and dislikes thor"), 2000);
    
    });
}


async function chainResponses() {

    // wait here until firstPromise completes
    let firstResult = await firstPromise; 

    // pass firstResult to be used in secondPromise and wait until that completes
    let secondResult = await getResponseSecondServer(firstResult);

    // pass secondResult to be used in thirdPromise and wait until that completes
    let thirdResult = await getResponseThirdServer(secondResult);

    console.log("The value retrieved from the third server is ", thirdResult);

}


console.log("Demonstrating chaining of request / responses using succesive await");
chainResponses();
