// Conventional way of assigning property values to variables
let person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

let fName = person1.firstName;
let lName = person1.lastName;

console.log("Conventional approach: The name is " + fName + " " + lName);

// Object destructuring syntax: basic version

let { firstName: fname, lastName: lname } = person1;
console.log("Object destructuring # 1: The name is " + fName + " " + lName);

// Object destructuring: when variable names are same as property keys
let { firstName, lastName} = person1;
console.log("Object destructuring # 2: The name is " + firstName + " " + lastName);

// We can use default values for variables when a property doesn't exist

let person2 = {
    job: 'Programmer',
    country : 'USA',
    age : 28
};

let { job, country, age = 18 } = person2;
console.log("Object destructuring # 3: The job is " + firstName + " in country " 
+ country + " at age " + age);

// Uncomment the code below to see effect
// And comment out line 30, 31 above as well

// let person3 = {
//     job: 'Engineer',
//     country : 'Malaysia',
// };
// let { job, country, age = 18 } = person3;
// console.log("Object destructuring # 4: The job is " + firstName + " in country " 
// + country + " at age " + age);


// Conventional approach when an object is passed as a parameter
// We access properties in object using dot notation
function showValues1(props) {
    console.log(props.size);
    console.log(props.person);
    console.log(props.imageId);
}

// Parameter destructuring allows us to directly access the 
// properties in object without using conventional dot notation
function showValues2({size,person,imageId}) {
    console.log(size);
    console.log(person);
    console.log(imageId);
}

myObject = {
    person : "superman",
    size : 99,
    imageId : "cool.jpg"
}
console.log("Function call in conventional way");
showValues1(myObject);

console.log("Function call using parameter destructuring");
showValues2(myObject);

