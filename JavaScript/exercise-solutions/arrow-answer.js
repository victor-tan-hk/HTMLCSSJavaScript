

/* Select any 2 solutions in functions-question.js,
 rewrite the normal functions as arrow functions and invoke them.
 */

// Q1

let findFactorial= (singleNum) => {
    let factorial = 1;
    for (let i = 1; i <= singleNum; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log("The factorial of 5 is ", findFactorial(5));

//Q2

let findTotalAllDivisible= (x, y, z) => {
    let total = 0;
    for (let i = y; i <= z; i++) {
        if (i % x == 0)
            total += i;
    }
    return total;
}

console.log("The total for Q2 is ", findTotalAllDivisible(5, 20, 40));


//Q3


let showPower = (powerNum, numLines) => {

    let lineToShow = 'n \t';
    for (let i = 2; i <= powerNum; i++)
        lineToShow += "n^" + i + " \t";
    console.log(lineToShow);
    for (let i = 1; i <= numLines; i++) {
        let lineToShow = '';
        let product = 1;
        for (let y = 1; y <= 4; y++) {
            product *= i;
            lineToShow += "" + product + "\t";
        }
        console.log(lineToShow);
    }
}

showPower(4, 5);


//Q4


let showStarLines= (numLines) => {
    for (let i = 1; i <= numLines; i++) {
        let lineToShow = "";
        for (let j = 1; j <= i; j++) {
            lineToShow += "*";
        }
        console.log(lineToShow);
    }

}

showStarLines(5);
