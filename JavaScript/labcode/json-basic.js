
// Using Node's native modules fs which provides
// functions to read and write files
const fs = require('fs');

let employee = {
    'first name' : 'Peter',
    'last name' : 'Parker',
    age : 32,
    isMarried: false,
}
// To convert an object to a JSON String

let employeeString = JSON.stringify(employee);
console.log("employee is an",typeof employee);
console.log("employeeString is a",typeof employeeString);
console.log(employeeString);

// To convert a JSON string back to an object

let newEmployee = JSON.parse(employeeString);
console.log("newEmployee is an",typeof newEmployee);
console.log(newEmployee);

// We can copy and paste a JSON string from another location
// and place it between backticks to make it a ES6 template literal
// before converting it to an object
let heroDescription = `
{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
`;

let heroObject = JSON.parse(heroDescription);
console.log(typeof heroObject);
console.log("The name of the 2nd member is : ",heroObject.members[1].name);
console.log("The third power that the 2nd member has is : ",heroObject.members[1].powers[2]);


// Using fs to read a JSON file from the same directory
// as this source code file

fs.readFile('./superhero.json', 'utf8', (err, jsonFileData) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('Read data from superhero.json :', jsonFileData);

    // Converting JSON string to an object 
    anotherHeroObject =  JSON.parse(jsonFileData);
    console.log("The squad name is " + anotherHeroObject.squadName);
})

// Using fs to write the employeeString that we converted from an object 
// to a JSON file in the same folder as this source code file
fs.writeFile('./newEmployee.json', employeeString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})