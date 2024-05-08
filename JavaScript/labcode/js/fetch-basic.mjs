
// Importing the Fetch API from the node-fetch module
import fetch from 'node-fetch';

let urlToDos1 = 'https://jsonplaceholder.typicode.com/posts/1';
let urlPosts = 'https://jsonplaceholder.typicode.com/posts';
let nonExistentURL = 'https://qv24vxse5434.com.my';
let resourceNotFoundURL = 'https://shopee.com.my/asdf/234';

console.log("Initiating a fetch request to ", urlToDos1);
fetch(urlToDos1)
.then(response => response.json()) // converts the JSON response to an object
.then(finalObj => {
    console.log(typeof finalObj);
    console.log("The id is ", finalObj.id);
    console.log("The title is ", finalObj.title);
    console.log("The body is ", finalObj.body);
});



console.log("Initiating a fetch request to ", urlPosts);
fetch(urlPosts)
.then(response => response.json()) // converts the JSON response to an object
.then(finalObj => {
    console.log("The title for the 3rd object is ", finalObj[2].title);
});

// Demonstrating error handling with the Fetch API

// Change the arguments below the following variables to see the results
// nonExistentURL, resourceNotFoundURL, urlToDos1
console.log("Initiating a fetch request to ", nonExistentURL);
fetch(nonExistentURL)
.then(response => {

    console.log('The status of the response is ', response.status);
    console.log('The text for this response status is ', response.statusText);

    if (!response.ok) {
        throw Error("There was an issue with the request : " + response.statusText);
    }
    return response.json();

})
.then(finalObj => {
    console.log(finalObj);
})
.catch(error => {
    console.log('There was an error : ', error);
});



console.log("Doing some unrelated stuff in the background");
