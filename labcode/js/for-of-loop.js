
console.log("Iterating over a simple array");
let scores = [80, 90, 70];
for (let score of scores) {
    score = score + 5;
    console.log(score);
}

console.log("Access the index of the array elements inside the loop via the entries() method of the Array class");

let colors = ['Red', 'Green', 'Blue'];
for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

console.log("Used to perform object destructuring");
const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
}

console.log(`Total scores: ${sum}`); // 14

