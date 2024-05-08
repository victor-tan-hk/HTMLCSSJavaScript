

// This creates an object through object literal notation
// and stores it in the variable person
let person = {
    firstName: 'John',
    lastName: 'Wick'
};

console.log('Initial value of person ', person);

// Use the dot operator to access the values of properties in the object
console.log("The firstName property has the value ", person.firstName);
console.log("The lastName property has the value ", person.lastName);

// Modifying value of an existing property
person.firstName = 'Jane';

console.log('After modifying firstName, person is now ', person);

// Add new property that did not previously exist
person.age = 25;

console.log('After adding new property, person is now ', person);

// Delete existing property
delete person.age;

console.log('After deleting existing  property, person is now ', person);

// We can use the in keyword operator to determine whether 
// a property is contained in a given object
// firstName property is in person, so this is true
console.log('firstName' in person);

// age property is no longer in person, so this is false;
console.log('age' in person);

console.log("Attempting to access a property that does not exist in an object");
console.log(person.age); // undefined

/* If you have a space in the key name, then the key must be
delimited within quotes - either single or double to make it a string. 
Then we use bracket notation to access its value
 */

let employee = {
    'first name' : 'Peter',
    'last name' : 'Parker',
    age : 32,
    isMarried: false,
}

console.log("Employee's first name is ", employee['first name']);
console.log("Employee's last name is ", employee['last name']);

// We can still use bracket notation as an alternative
// to access the value of a key that is a single word

console.log("Employee's age is ", employee['age']);

// The more conventional notation is employee.age


// Objects can also contain other objects as their property values
// The nesting of objects in this way can continue to any depth

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: {
            name : 'USA',
            region: 'North America',
            population: 350000000
        }
    }
}

// To access nested object properties, use dot operator repeatedly
console.log("Contact's residence is on street ", contact.address.street);
console.log("Contact's country is in the region ", contact.address.country.region);

// We can also use bracket notation to access nested object properties
console.log("Contact's state is ", contact['address']['state']);
console.log("Contact's country has a population of ", contact['address']['country']['population']);






