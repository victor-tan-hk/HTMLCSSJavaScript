
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log('Initial value of person ', person);

// Modifying existing property
person.firstName = 'Jane';

console.log('After modifying firstName, person is now ', person);

// Add existing property
person.age = 25;

console.log('After adding new property, person is now ', person);

// Delete existing property
delete person.age;

console.log('After deleting existing  property, person is now ', person);

// firstName property is in person, so this is true
console.log('firstName' in person);

// age property is no longer in person, so this is false;
console.log('age' in person);






