
console.log("Once converted to a string, the + operator performs string concatenation");
console.log ("123" + String(456));

console.log("Using toString()");
let a = 67;
console.log("345" + a.toString());

let b = 123.456;
console.log("Using toFixed()");
console.log(b.toFixed(2));

console.log("Using toPrecision()");
console.log(b.toPrecision(3));
