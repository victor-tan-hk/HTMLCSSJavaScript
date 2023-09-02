

let valueReturnedFromServer;
console.log("Sending a request to server to retrieve a value");

// Simulating sending a request to server and waiting 2 seconds for the response
setTimeout(() => {
    console.log("Received back response from server");
    valueReturnedFromServer = 88;
}, 2000);

// Its ok to do unrelated stuff while you are waiting for the response
// to return from the server
console.log("Doing something unrelated here");
// This statement below is the problem
// If you try to use a value that is supposed to be retrieved from the server
// before the server response is received, you will likely run into problems
console.log("Using value retrieved from the server is ", valueReturnedFromServer);
console.log("Doing more unrelated stuff here");


