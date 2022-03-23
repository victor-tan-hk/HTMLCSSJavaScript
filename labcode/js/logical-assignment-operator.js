
let title;
title ||= 'untitled';

console.log("title is initally undefined, so the value untitled gets stored in it via the logical assignment operator");
console.log(title);


title = 'JavaScript Awesome';
title ||= 'untitled';
console.log("title now has a value, so the value untitled is not stored into it");
console.log(title);


let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};

person.lastName &&= 'Smith';

console.log(person);

console.log("THe longer form of the previous statement is");
if (person.lastName) {
    person.lastName = 'Biden';
}
console.log(person);
