let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// To create an object method
// We can assign an anonymous function as a value of a new property
person.greet = function () {
    console.log('Hello!');
}

person.greet();

// A shorter way to declare a method in an object
let anotherPerson = {
    firstName: 'John',
    lastName: 'Doe',
    addTwoNumbers: function (a, b) {
        return a + b;
    }
};

console.log("3 + 5 gives us ", anotherPerson.addTwoNumbers(3, 5));


/* A method of an object can access properties of that same object
For that situation, the name of the property must be preceded with the keyword this 
*/

let finalPerson = {
    firstName: 'John',
    lastName: 'Wick',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};


console.log(finalPerson.getFullName());
