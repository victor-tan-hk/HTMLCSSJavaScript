

/* Q1. Create a array of 10 random strings of varying lengths (including a few that are longer than 8 characters). 
Using the filter higher order array function, find the strings that are longer than 8 characters. */

console.log("Solution for Q1");
let arrayStrings = ['cat','asdfasdfdd','dog','superheroes','rat','qwerqwerd'];
let longStrings = arrayStrings.filter(x => x.length > 8);
console.log(longStrings);


/* Q2. Create a 2-dimensional array of 3 rows and variable number of columns. 
The first element in each row is a string, and the remaining elements are the individual characters of that string (resulting in a variable number of columns). 
As an example below, the first 2 rows have 5 columns each, while the last row has 8 columns.

horse	    h	o	r	s	e				
snake	    s	n	a	k	e				
elephant	e	l	e	p	h	a	n	t	

 */

console.log("Solution for Q2");
let array2d = [];
let numRows = 3;

// Creating an empty array for each element of the initial array
for (let i = 0; i < numRows; i++) {
    array2d[i] = [];
}

// Creating the first element in the empty array
array2d[0][0] = "horse";
array2d[1][0] = "monkey";
array2d[2][0] = "elephant";


// creating the multi variable column
for (let i = 0; i < numRows; i++) {
    for (let j = 1; j <= array2d[i][0].length; j++) {
        array2d[i][j] = array2d[i][0][j-1];
    }
}
console.log(array2d);

/* Q3. Write a program to check whether a string is a palindrome. 
A string is called a palindrome if the reverse of that string is the same as the original string. For e.g. radar, level, etc */

console.log("Solution for Q3");

let originalString = 'radar';
let reverseString = '';


for (let i = originalString.length - 1; i >= 0; i--) {
    reverseString = reverseString + originalString[i];
}

if (reverseString === originalString) 
    console.log ("The string " + originalString + " is a palindrome");
else
    console.log("The string " + originalString + " is NOT a palindrome");

/* Q4. Copy a random block of text from a web article. Identify the 3 words that occur the most frequently in that random block of text. */


console.log("Solution for Q4");
// We can use the split method
// https://www.javascripttutorial.net/javascript-string-split/

let randomText = "cat dog mouse elephant rat rat dog mouse elephant rat pig snake tiger giraffe zebra rat cowboy rat dog car aeroplane dog house monkey mouse";

arrayStrings = randomText.split(' ');
console.log("The array of strings from the original text is ", arrayStrings);
let foundString = false;
/* this array will contain
objects consisting of two properties: the word and a
count of its occurrences
 */
let arrayStringCount = [];
for (let i = 0; i < arrayStrings.length; i++) {
    foundString = false;
    for (let j = 0; j < arrayStringCount.length; j++) {
        if (arrayStringCount[j].word === arrayStrings[i]) {
            arrayStringCount[j].count++;
            foundString = true;
            break;
        }
    }
    if (!foundString) {
        arrayStringCount[arrayStringCount.length] = {
            word : arrayStrings[i],
            count : 1,
        };
    }
}
console.log("The list of words and the number of times they occur in the original text");console.log(arrayStringCount);

let sortedArray = arrayStringCount.sort(
    (first,second) => {
        if (first.count == second.count)
            return 0;
        else if (first.count > second.count)
            return -1;
        else return 1;
    }
);
console.log("The 3 words that occur most frequently and their number of occurrences");
console.log(sortedArray[0]);
console.log(sortedArray[1]);
console.log(sortedArray[2]);
