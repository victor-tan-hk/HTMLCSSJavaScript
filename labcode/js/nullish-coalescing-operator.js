
// The nullish coalescing operator returns the second value (value2) if the first value (value1) is null or undefined

let myName = null ?? 'John';
console.log(myName); // 'John'

let age = undefined ?? 28;
console.log(age);

// We can also use this in combination with the optional chaining operator

let secondPerson = {
    name : 'Spiderman'
}


let defaultAddress = "New York";
let findValue = secondPerson?.address ?? defaultAddress;
console.log("findValue when the required property DOES NOT exist is ", findValue); 