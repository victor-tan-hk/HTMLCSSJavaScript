
let name = 'John';
let age = 25;

let person = {
    name: 'John',
    age: 25,
};

let newAge = age;

newAge = newAge + 1;
// Value of age remains the same
console.log("age and newage are", age, newAge);

let member = person;

member.age = 26;

// Since both person and member are referencing the same object
// they both print out the same contents
console.log("Person is ", person);
console.log("Member is ", member);


function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log("Result is " , result); // 100 
console.log("y is ", y); // 10 -- no change

function increaseAge(obj) {
    obj.age += 1;
}
  
increaseAge(person);
  
console.log("Person new value is now ", person);

function anotherIncrease(obj) {
    obj.age += 1;
    obj = { name: 'Jane', age: 22 }
}

anotherIncrease(person);
  
console.log("Person new value is now ", person);
