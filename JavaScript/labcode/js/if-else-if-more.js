
/* if you earn more than 5000 a month and are married and have EPF savings of at least 60000, then you qualify for the loan */

console.log("Loan Example #1");
// Change the values here to test out the logic of the conditional statement
let monthlySalary = 8000;
let isMarried = true;
let epfSavings = 70000;

// Demonstrating nested-if
// make sure you match the { } braces correctly
if (monthlySalary > 5000) {
    console.log("Monthly salary more than 5000. One step closer !");
    if (isMarried) {
        console.log("You are married. Another step closer !");
        if (epfSavings >= 60000) {
            console.log("You qualify for the loan. Yay !");
        }
        else {
            console.log ("Sorry ! You don't qualify ....");
        }
    }
    else {
        console.log ("Sorry ! You don't qualify ....");
    }
} else {
    console.log ("Sorry ! You don't qualify ....");
}


// If the intermediate output statements are not required, this can be written more simply as:

console.log("Loan Example #1 - Repeated in simpler form");

if (monthlySalary > 5000 && isMarried && epfSavings >= 60000) 
    console.log("You qualify for the loan. Yay !");
else
    console.log ("Sorry ! You don't qualify ....");



/* Conditions to qualify for the loan
1. if you earn 5000 or more a month and you have EPF savings of at least 60000
2. if you earn less than 5000 a month and you have EPF savings of at least 80000
3. if you are married and both you and your spouse together earn 10000 or more a month and your EPF savings is at least 30000 */


console.log("Loan Example #2");
// Change the values here to test out the logic of the conditional statement
let spouseMonthlySalary = 8000;
monthlySalary = 2000;
isMarried = true;
epfSavings = 70000;

if (isMarried) {
    if (spouseMonthlySalary + monthlySalary >= 10000) {
        if (epfSavings >= 30000) {
            console.log("You qualify for the loan. Yay !")
        } else {
            console.log ("Sorry ! You don't qualify ....");
        }
    } else {
        console.log ("Sorry ! You don't qualify ....");
    } 
} else {

    if (monthlySalary >= 5000 && epfSavings >= 60000)
        console.log("You qualify for the loan. Yay !")
    else if (monthlySalary < 5000 && epfSavings >= 80000)
        console.log("You qualify for the loan. Yay !")
    else    
        console.log("Sorry ! You don't qualify ....")
}

// Rewriting the same logic above in simpler form

console.log("Loan Example #2 - Repeated in simpler form");

let qualifyForLoan = false;

if (isMarried && (spouseMonthlySalary + monthlySalary >= 10000) && epfSavings >= 30000)
    qualifyForLoan = true;
else if (monthlySalary >= 5000 && epfSavings >= 60000)
    qualifyForLoan = true;
else if (monthlySalary < 5000 && epfSavings >= 80000)
    qualifyForLoan = true;

if (qualifyForLoan)
    console.log("You qualify for the loan. Yay !");
else    
    console.log("Sorry ! You don't qualify ....")


