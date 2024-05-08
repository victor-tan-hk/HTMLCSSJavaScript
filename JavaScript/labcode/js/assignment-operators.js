

let a = 10, b = 20, c = 30;

console.log("Chaining assignment operators");
a = b = c; // all variables have the value 30 now

a = 10;
b = 20;
c = 5;
a += b;
console.log("new value of a is ", a);

b -= c;
console.log("new value of b is ", b);

c *= 2;
console.log("new value of c is ", c);

b /= 3;
console.log("new value of b is ", b);

a %= 4;
console.log("new value of a is ", a);
