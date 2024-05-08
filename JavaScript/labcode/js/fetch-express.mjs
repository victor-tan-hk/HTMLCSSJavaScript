
// Importing the Fetch API from the node-fetch module
import fetch from 'node-fetch';

let baseUrl = 'http://localhost:3000/employees';

fetch(baseUrl)
    .then(response => response.json()) // converts the JSON response to an object
    .then(arrEmployees => {
        console.log("A total of " + arrEmployees.length + " employees was retrieved");
        for (let employee of arrEmployees) {
            console.log(employee);
        }
    });


fetch(baseUrl + "/1")
    .then(response => response.json()) // converts the JSON response to an object
    .then(employee => {
        console.log("\nRetrieved employee #1");
        console.log(employee);
    });

fetch(baseUrl + "/3")
    .then(response => response.json()) // converts the JSON response to an object
    .then(employee => {
        console.log("\nRetrieved employee #3");
        console.log(employee);
    });    
