
let countries = ["Malaysia", "Singapore", "Thailand"];
// Extracting items from array in the normal way
let countryA = countries[0];
let countryB = countries[1];
let countryC = countries[2];
console.log("The 3 countries are " + countryA + ", " + countryB + "," + countryC);

let heros = ["Thor","Superman","Hulk"]
// Extracting items from array using destructuring
let [heroA, heroB, heroC] = heros;

console.log("The 3 heros are " + heroA + ", " + heroB + "," + heroC);

function getCountries() {
    let countries = ["Malaysia", "Singapore", "Thailand"];
    return countries;
  }
// Can also destructure array that is returned from a function 
let [first, second, third] = getCountries();
console.log("The 3 countries are " + first + ", " + second + "," + third);



// Swapping variable values usually requires a 3rd temp variable
let [a, b] = ["cat", "dog"];
let temp = a;
a = b;
b = temp;
console.log ("New value of a is " + a + " and new value of b is " + b);

let [c, d] = ["cat", "dog"];
// Destructuring provides a short form for swapping values
[c, d] = [d, c];
console.log ("New value of c is " + c + " and new value of d is " + d);


