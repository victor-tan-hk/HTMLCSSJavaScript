let p =
`This text can contain "double quotes"
can 'single quotes' and
can span multiple lines
I mean ... how cool is that ???
`;

console.log(p);

let firstName = 'John',
    lastName = 'Doe';

let greeting = `Hi ${firstName}, ${lastName}`;
console.log(greeting); // Hi John, Doe

let price = 8.99,
    tax = 0.1;

let netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;

console.log(netPrice); // netPrice:$9.89