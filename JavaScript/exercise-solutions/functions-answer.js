

/* For all the solutions in for-loop-question.js, rewrite the code as functions and invoke the functions.
 */

// Q1

function findFactorial(singleNum) {
    let factorial = 1;
    for (let i = 1; i <= singleNum; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log("The factorial of 5 is ", findFactorial(5));

//Q2

function findTotalAllDivisible(x, y, z) {
    let total = 0;
    for (let i = y; i <= z; i++) {
        if (i % x == 0)
            total += i;
    }
    return total;
}

console.log("The total for Q2 is ", findTotalAllDivisible(5, 20, 40));


//Q3


function showPower(powerNum, numLines) {

    let lineToShow = 'n \t';
    for (let i = 2; i <= powerNum; i++)
        lineToShow += "n^" + i + " \t";
    console.log(lineToShow);


    for (let i = 1; i <= numLines; i++) {
        lineToShow = '';
        let product = 1;
        for (let y = 1; y <= powerNum; y++) {
            product *= i;
            lineToShow += "" + product + "\t";
        }
        console.log(lineToShow);
    }
}



showPower(4, 5);


//Q4


function showStarLines(numLines) {
    for (let i = 1; i <= numLines; i++) {
        let lineToShow = "";
        for (let j = 1; j <= i; j++) {
            lineToShow += "*";
        }
        console.log(lineToShow);
    }

}

showStarLines(5);
