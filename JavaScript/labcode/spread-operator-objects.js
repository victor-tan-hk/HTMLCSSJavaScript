let person = {
    name : "Superman",
    age : 30,
    married: false,
    salary : 46.35
}
console.log("Extracting specific values from any object using the spread operator"); 
let {name, ...others} = person;
console.log(name); // Superman
console.log(others); // { age: 30, married: false, salary: 46.35 }

let {salary, ...more} = person;
console.log(salary); // 46.35
console.log(more); // { name: 'Superman', age: 30, married: false }

// Both variables reference the same object
let samePerson = person; 
person.age = 50;
console.log("samePerson is ", samePerson);

person.age = 30; // reset back to 30
// Use the spread operator clone an object
// This is however a shallow clone
let differentPerson = {... person};
person.age = 100;
console.log("differentPerson is ", differentPerson);


// Use the spread operator to clone an object
// and add a new property to the clone
let coolPerson = {
    ...person,
    numberCars: 3
}

console.log("Cloning an existing object and adding a new property");
console.log(coolPerson);


console.log("Combining multiple objects into a larger object");
let obj1 = { x : 1, y : 2 };
let obj2 = { z : 3 };
let obj3 = {...obj1, ...obj2};
console.log(obj3); // {x: 1, y: 2, z: 3}


