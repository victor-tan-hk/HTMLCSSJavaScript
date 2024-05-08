
let array2d = [];
let numRows = 5;
let numColumns = 7;

// Creating an empty array for each element of the initial array
for (let i = 0; i < numRows; i++) {
    array2d[i] = [];
}

// Populating the empty array with content
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
        array2d[i][j] = (i*10) + j + 11;
    }
}


console.log("The 2d array in raw form");
console.log(array2d);

//Printing out the content of the 2-d array in a formatted form
console.log("\nThe 2 d array in a formatted form \n");

for (let i = 0; i < numRows; i++) {
    let rowContent = '';
    for (let j = 0; j < numColumns; j++) {
        rowContent += array2d[i][j] + "\t";
    }
    console.log(rowContent);
}

console.log("\nThe element at the 2nd row and 3rd column is ",array2d[1][2] );

console.log("The element at the 5th row and 6th column is ",array2d[4][5] );


console.log("\nSumming the values across each column\n");

for (let j = 0; j < numColumns; j++) {
    let columnTotal = 0;
    for (let i = 0; i < numRows; i++) {
        columnTotal += array2d[i][j];
    }
    console.log("Total values across column " + (j+1) + " is " + columnTotal);
}

console.log("\nSumming the values across each row\n");


for (let i = 0; i < numRows; i++) {
    let rowTotal = 0;
    for (let j = 0; j < numColumns; j++) {
        rowTotal += array2d[i][j];
    }
    console.log("Total values across row " + (i+1) + " is " + rowTotal);
}


