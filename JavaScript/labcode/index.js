const express = require('express');
const app = express();
const port = 3000;

// Here we have an array of objects holding data about 5 employees
let employees = [
    { 
        firstName: 'Peter',
        lastName: 'Parker',
        age: 33,
        isMarried: false,
    },
    { 
        firstName: 'Diana',
        lastName: 'Prince',
        age: 40,
        isMarried: true,
    },
    { 
        firstName: 'Tony',
        lastName: 'Stark',
        age: 43,
        isMarried: false,
    },
    { 
        firstName: 'Bruce',
        lastName: 'Banner',
        age: 55,
        isMarried: true,
    },
    { 
        firstName: 'Steve',
        lastName: 'Rogers',
        age: 25,
        isMarried: false,
    }
    
];


app.get('/', (req, res) => {
  res.send("Please use path /employees or /employeeId");
});

app.get('/employees', (req, res) => {
  console.log("Returning JSON for all employees");
  res.json(employees);
});


app.get('/employees/:employeeNumber', (req, res) => {
  let empNum = parseInt(req.params.employeeNumber);
  if (empNum <= employees.length) {
    console.log("Returning JSON for employee # " + empNum);
    res.json(employees[empNum - 1]);
  }
  else {
    console.log("Invalid employee # " + empNum);
    res.send("Invalid employee # " + empNum);
  }    
    
});

app.listen(port, () => {
  console.log(`Basic Express app up and running on port ${port}`)
});
