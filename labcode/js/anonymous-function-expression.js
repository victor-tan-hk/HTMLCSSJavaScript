
let show = function() {
    console.log('Anonymous function');
};

show();

// Passing a function as an argument to another function
// This function is known as a callback and is executed
setTimeout(function() {
    console.log('Execute later after 2 seconds')
}, 2000);

console.log("Continued executing while waiting for timeout to complete");

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log("From inside the IIFE");
    console.log(person.firstName + ' ' + person.lastName);
})(person);