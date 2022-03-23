
let firstPerson = {
    name : 'Superman',
    address : {
        street : 'Metropolitan St',
        number : 234
    }
}

let secondPerson = {
    name : 'Spiderman'
}

console.log("Using the logical operator ||");
let findValue = firstPerson && firstPerson.address && firstPerson.address.street;
console.log("findValue when the required property exists is ", findValue); 

findValue = secondPerson && secondPerson.address && secondPerson.address.street;
console.log("findValue when the required property DOES NOT exist is ", findValue); 


console.log("Using the optional chaining operator ?.");
findValue = firstPerson?.address?.street;
console.log("findValue when the required property exists is ", findValue); 
findValue = secondPerson?.address?.street;
console.log("findValue when the required property DOES NOT exist is ", findValue); 

let file = {
    read() {
        return 'file content';
    },
    write(content) {
        console.log(`Writing ${content} to file...`);
        return true;
    }
};

console.log("For an object, calling a method that exists "); 
let data = file.read?.();
console.log("value of data is ", data);

console.log("For an object, calling a method that DOES NOT exist"); 
data = file.wierdo?.();
console.log("value of data is ", data);
