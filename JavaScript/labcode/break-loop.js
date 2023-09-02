
console.log("Terminate loop when i is 3");
for (let i = 1; i <= 5; i++) {
    console.log("i has the value of ", i);
    if (i === 3) {
        break;
    }
}
console.log("First loop terminated");

console.log("Demonstration of terminating inner loop for a nested loop structure");
console.log("In that case, loop execution still continues with the outer loop");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 8; j++) {
        console.log("i is " + i + " and j is " + j);
        if (i + j === 6) {
            break;
        }

    }
}

console.log("Demonstration of terminating BOTH inner and outer loop for a nested loop structure using a label");
// We apply label outer to the outer loop
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 8; j++) {
        console.log("i is " + i + " and j is " + j);
        if (i + j === 6) {
            break outer;
        }
    }
}


console.log("Demonstrating break in a while loop");
let i = 1;
while (i <= 5) {
    console.log("i has the value of ", i);
    if (i === 3) {
        break;
    }
    i++;
}
