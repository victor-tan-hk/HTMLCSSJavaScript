


/* Q1. A prime number is a number that is perfectly divisible only by itself and 1. 

https://thirdspacelearning.com/blog/what-is-a-prime-number/

Print out the list of prime numbers between two numbers x and y. For e.g. between 20 and 40, the prime numbers are 23, 29, 31, 37

Hint: You  need to use a nested loop */

let x = 10;
let y = 50;
let isItPrime = false;

for (let i = x; i <= y; i++) {

    // Skip 1 and 0
    if (i === 1 || i === 0)
        continue;

    isItPrime = true;
    // We do not need to go all the way up to i
    // Once we go beyond i/2, division by all higher numbers 
    // will result in a value between 1 and 2 
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            isItPrime = false;
            break;
        }
    }

    if (isItPrime)
        console.log(i + " is a prime number");

}