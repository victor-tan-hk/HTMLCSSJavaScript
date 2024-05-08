
// Importing the Fetch API from the node-fetch module
import fetch from 'node-fetch';

let urlToDos1 = 'https://jsonplaceholder.typicode.com/posts/1';
let urlPosts = 'https://jsonplaceholder.typicode.com/posts';
let nonExistentURL = 'https://qv24vxse5434.com.my';
let resourceNotFoundURL = 'https://shopee.com.my/asdf/234';


async function firstRequest() {

    console.log("Initiating a fetch request to ", urlToDos1);
    let result = await fetch(urlToDos1);
    let response = await result.json();
    console.log(typeof response);
    console.log("The id is ", response.id);
    console.log("The title is ", response.title);
    console.log("The body is ", response.body);

}


async function secondRequest() {

    console.log("Initiating a fetch request to ", urlPosts);
    let result = await fetch(urlPosts);
    let response = await result.json();
    console.log("The title for the 3rd object is ", response.title);

}

firstRequest();

secondRequest();

