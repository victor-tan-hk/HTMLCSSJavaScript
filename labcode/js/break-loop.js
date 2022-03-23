
console.log("terminate loop when i is 2");
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
        break;
    }
}

console.log("terminating inner loop");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i + j == 4) {
            break;
        }
        console.log(i, j);
    }
}

console.log("terminating nested loop");

outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i + j == 4) {
            break outer;
        }
        console.log(i, j);
    }
}


console.log("using break in a while loop");
let i = 0;
while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}
