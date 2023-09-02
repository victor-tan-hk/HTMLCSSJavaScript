
/* Create a variable and store the value of a year in it.
Using the algorithm outlined here

http://bullythebear.blogspot.com/2015/03/algorithm-to-find-chinese-horoscope.html

Determine the Chinese astrological sign for that year using a switch case statement
 */


let year = 2022;

let resultToCheck = ((year - 4) % 12) + 1;
let astroSign = '';
console.log(resultToCheck);
switch (resultToCheck) {
    case 1:
        astroSign = 'rat';
        break;
    case 2:
        astroSign = 'ox';
        break;
    case 3:
        astroSign = 'tiger';
        break;
    case 4:
        astroSign = 'rabbit';
        break;
    case 5:
        astroSign = 'dragon';
        break;
    case 6:
        astroSign = 'snake';
        break;
    case 7:
        astroSign = 'horse';
        break;
    case 8:
        astroSign = 'goat';
        break;
    case 9:
        astroSign = 'monkey';
        break;
    case 10:
        astroSign = 'rooster';
        break;
    case 11:
        astroSign = 'dog';
        break;
    case 12:
        astroSign = 'pig';
        break;
}

console.log("The sign is ",astroSign); 