

console.log("Convert a single string to an array of strings of single character");
let longName = "Superman";
let nameChars = [...longName];
console.log(nameChars); // ['S', 'u', 'p', 'e', 'r', 'm','a', 'n']

console.log("Combining values from multiple arrays into a larger array"); 
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); // [ 1, 2, 3, 4, 5, 6 ]

originalArray = [1, 2, 3];
// Both variables are referencing the same array object
sameArray = originalArray;
originalArray[0] = 100;
console.log("sameArray is ", sameArray)

// Reset back originalArray
originalArray[0] = 1;
console.log("Cloning an array");
let cloneArray = [...originalArray];
originalArray[0] = 100;
console.log("cloneArray is ", cloneArray)


const strArray = ['My', 'name', 'is', 'Jack'];

console.log("Extracting specific values from any array"); 
let [firstWord, secondWord, ...otherWords] = strArray;
console.log("firstWord : ",firstWord); // My
console.log("secondWord : ",secondWord); // name
console.log("otherWords : ",otherWords); // [ 'is', 'Jack' ]

console.log("Using the spread operator as a rest parameter");
console.log("Supports the passing of variable number of arguments to a function");
function printNums(...nums) {
    console.log(nums);
}

printNums(3); // [3]
printNums(4, 5, 6); // [4, 5, 6]


