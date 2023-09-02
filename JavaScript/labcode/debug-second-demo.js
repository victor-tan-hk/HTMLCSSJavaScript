

function findSmallestNumber(arrNumbers) {

    let smallestNum = 0;
    for (let i = 0; i < arrNumbers.length - 1; i++) {
        if (smallestNum < arrNumbers[i])
            smallestNum = arrNumbers[i];
    }
    return smallestNum;

}

let firstNumberArray = [3, 10, 100, 60, 80];

// This will give you an error. 
// Locate the bug(s) in findSmallestNumber and correct it ! 
console.log("The smallest number in firstNumberArray is ", findSmallestNumber(firstNumberArray));

let secondNumberArray = [15, 10, 70, 60, 1];

// This may still give you an error.  
// Locate the bug(s) in findSmallestNumber and correct it !
console.log("The smallest number in secondNumberArray is ", findSmallestNumber(secondNumberArray));


