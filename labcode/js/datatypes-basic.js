let counter = 120; 
let isSupermanAwesome = true;
let myName = "Clark Kent";

console.log("The data type of counter is ", typeof counter);console.log("The data type of isSupermanAwesome is ", typeof isSupermanAwesome);
console.log("The data type of myName is ", typeof myName);

let noValueHere;
console.log(noValueHere);        // undefined
console.log("The data type of noValueHere is ", typeof noValueHere); // undefined

let obj = null;
console.log("The data type of obj is ",typeof obj); // object

console.log('a'/2); // NaN;
console.log(NaN == NaN); // false

let message = 'I\'m also a valid string';
console.log(message);

let anotherMessage = "Do you know what a 'XYZ' is ?";
console.log(anotherMessage);

let completed = false;
console.log(typeof completed); // boolean

let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log("Contact's first name is ", contact.firstName);
console.log("Contact's last name is ", contact.lastName);
console.log("Contact's city is ", contact.address.city);

console.log("Contact's email is ", contact['email']); // 'john.doe@example.com'
console.log("Contact's building is ", contact['address']['building']);

console.log("Contact's email is ", contact.age); // undefined