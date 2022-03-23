
console.log("For loop to count from 1 to 5");
for (let i = 1; i < 5; i++) {
    console.log(i);
}

console.log("For loop without the initializer");
let j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}

console.log("For loop without the condition example");
for (let j = 1; ; j += 2) {
    console.log(j);
    if (j > 10) {
        break;
    }
}

console.log("For loop without loop body");
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
    console.log(sum);


console.log("Using comma operator in for loop");

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let s = '';
for (let i = 0, j = 1; i < board.length; i++, j++) {
    s += board[i] + ' ';
    if (j % 3 == 0) {
    console.log(s);
    s = '';
    }
}  