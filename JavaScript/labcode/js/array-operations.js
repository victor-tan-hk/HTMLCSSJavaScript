

// Demonstrating various array methods to manipulate the array

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log("The original contents of the arrays : ", seas);
seas.push('Red Sea');
console.log('Adding an element to the end gives : ', seas);

seas.unshift('Blue Sea');
console.log('Adding an element to the beginning gives : ', seas);

const lastElement = seas.pop();
console.log('The element at the end is ', lastElement);
console.log('Removing an element from the end gives : ', seas);

const firstElement = seas.shift();
console.log('The element at the start is ', firstElement);
console.log('Removing an element from the start gives : ', seas);

let locationOfNorth = seas.indexOf('North Sea');
console.log('North Sea is located at index position ', locationOfNorth);

let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);
console.log('After deleting the first 3 elements, we have in the original array : ',scores); 
console.log('And the new array contains these 3 elements that were deleted : ',deletedScores);

let colors = ['red', 'green', 'blue'];
colors.splice(2, 0, 'purple');
console.log('Colors after insertion is ', colors);
colors.splice(1, 0, 'yellow', 'pink');
console.log('Colors after second insertion is ', colors);


let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
console.log('Languages after insert / delete is ',languages); 
languages.splice(2,1,'C#','Swift','Go');
console.log('Languages after 2nd insert / delete is ',languages); 