
console.log("Skip to the next pass of the loop when i is 3");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("i has the value of ", i);
}



console.log("Using continue in a while loop");
// By skipping to the next pass of the loop for even numbers
// we will only see odd numbers printed out. 
let i = 0;
while (i < 10) {
    i++;
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

console.log("Using continue in a nested loop via a label");
// This is conceptually equivalently to just doing a 
// break in the inner loop as seen in the previous example
outer :for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 8; j++) {
        if (i + j === 6) {
            continue outer;
        }
        console.log("i is " + i + " and j is " + j);
    }
}