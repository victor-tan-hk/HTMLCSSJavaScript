
console.log("using continue in a for loop");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

console.log("using continue in a while loop");

let i = 0;
while (i < 10) {
    i++;
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

console.log("using continue in a nested loop using a label");

outer: for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
        if (i + j == 3) continue outer;
        console.log(i, j);
    }
}