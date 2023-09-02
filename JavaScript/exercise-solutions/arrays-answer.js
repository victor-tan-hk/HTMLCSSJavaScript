
/* Q1. Create an array of 10 numbers containing random positive and negative numbers. 
Find all the even numbers in this array and sum them up. 
 */

console.log("Solution for Q1");

let basicNumbers = [1, -2, 3, 4, -5, 6, 7, -8, -9, 10];

let sumEvenNumbers = 0;
for (num of basicNumbers) {
    if (num % 2 === 0) {
        console.log(num + ' is an even number');
        sumEvenNumbers += num;
    }
}
console.log("The sum of all even numbers in this array is ", sumEvenNumbers);


/* Q2. Create an array of 10 numbers containing random numbers. 
Create another array which contains the exact numbers from the first array, but with their order reverse. For e.g. 2,4,6,8 would now become 8,6,4,2.
There is a reverse method that can do this, try to write your code without using this
method.
https://www.w3schools.com/jsref/jsref_reverse.asp
JavaScript has an inbuilt method to generate random numbers between 1 and x. You can use this in your solution if you wish:
https://www.w3schools.com/jsref/jsref_random.asp */

console.log("Solution for Q2");
basicNumbers = [10, 20, 30, 40, 50];
let reverseNumbers = [];
for (let x = basicNumbers.length - 1; x >= 0; x--) {
    reverseNumbers.push(basicNumbers[x]);
}
console.log("The array with basicNumbers in reverse order is ", reverseNumbers);


/* Q3. Create an array of 20 numbers containing random numbers, where some of these numbers are repeated: for e.g. 3, 5, 8, 5, 9, 3, etc. 
Identify the numbers that appear more than once and how many times they appears (twice, three times, etc)
You can use an object to facilitate your solution
 */

console.log("Solution for Q3");
basicNumbers = [10, 20, 30, 40, 50, 20, 40, 10, 40, 20, 60];

firstItem = basicNumbers[0].toString();
// Use the [] syntax to place the variable value as the key name
let trackNumbers = {
    [firstItem] : 0
};
console.log ("trackNumbers initial state", trackNumbers);

for (num of basicNumbers) {
    itemToSearchFor = num.toString();
    if (itemToSearchFor in trackNumbers) {
        trackNumbers[itemToSearchFor]++;
    }
    else {
        trackNumbers[itemToSearchFor] = 1;
    }

}
console.log("trackNumbers final state");
console.log(trackNumbers);
// iterate over properties in object
for (const num in trackNumbers) {
    if (trackNumbers[num] > 1) {
        console.log(num + " occurs " + trackNumbers[num] + " times ");
    }
}


/* Q4. Create 2 arrays with 10 elements each containing random strings (for e.g. names of animals, cities, cars, people, etc). 
Ensure that there are a few strings which are identical in these 2 arrays. Identify identical strings in both these arrays.
 */

console.log("Solution for Q4");
let firstAnimals = ['cat', 'dog', 'mouse', 'elephant', 'tiger', 'horse'];
let secondAnimals = ['ox', 'snake', 'cat', 'horse', 'dog'];
let identicalStrings = [];

for (let i = 0; i < firstAnimals.length; i++) {

    for (let j = 0; j < secondAnimals.length; j++) {

        if (firstAnimals[i] === secondAnimals[j]) {
            identicalStrings.push(firstAnimals[i]);
            break;
        }
    }

}
console.log("The identical strings from both arrays are ", identicalStrings);


/* Q5. Create an array of 10 numbers containing random numbers. 
For every number that is more than 50, replace that number in its position with the number 888.
JavaScript has an inbuilt method to generate random numbers between 1 and x. You can use this in your solution if you wish:
https://www.w3schools.com/jsref/jsref_random.asp */


console.log("Solution for Q5");
basicNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < basicNumbers.length; i++) {
    if (basicNumbers[i] > 50)
        basicNumbers[i] = 888;
}
console.log("The new array is ", basicNumbers);


/* Q6. Repeat Q3, except this time, delete the duplicate numbers, so that each number only appears exactly once in the array.
 */

console.log("Solution for Q6");
basicNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 20, 70, 90, 60, 20, 70];
for (let i = 0; i < basicNumbers.length - 1; i++) {

    for (let j = i + 1; j < basicNumbers.length; j++) {
        if (basicNumbers[i] === basicNumbers[j]) {
            basicNumbers.splice(j, 1);

        }
    }

}
console.log("new basicNumbers without any duplicate numbers is ", basicNumbers);


/* Q7. Create an array of 5 elements containing string descriptions of numbers between 1 and 10, for e.g. ["six", "five", "three", "nine", "two"]. 
Using the map higher order array function and an object (optionally), create a new array whose contents are the numerical equivalents of those string descriptions, for e.g. [6, 5, 3, 9, 2]
 */

console.log("Solution for Q7");

let numberStrings = ["six", "five", "three", "nine", "two"];

let numberMap = {
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9,
    "ten" : 10
}

let actualNumbers = numberStrings.map(x => numberMap[x]);

console.log("New array with numerical equivalent content ", actualNumbers);

/* Q8. Create a 2-dimensional array with 3 rows and 5 columns containing random numbers. 
Find the largest / smallest number in each row.
 */


console.log("Solution for Q8");

let array2d = [];
let numRows = 3;
let numColumns = 5;

// Creating an empty array for each element of the initial array
for (let i = 0; i < numRows; i++) {
    array2d[i] = [];
}

// Populating the empty array with whole random numbers between 1 and 10
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
        let randNum = Math.floor((Math.random() * 100) + 1);
        array2d[i][j] = randNum;
    }
}
console.log("The 3 x 5 array with random numbers between 1 and 100");
console.log(array2d);

for (let i = 0; i < numRows; i++) {
    let smallestNum = array2d[i][0];
    let biggestNum = array2d[i][0];
    for (let j = 1; j < numColumns; j++) {
        if (smallestNum > array2d[i][j])
            smallestNum = array2d[i][j];
        if (biggestNum < array2d[i][j])
            biggestNum = array2d[i][j];
    }
    console.log("The largest number for line # " + (i + 1) + " is " + biggestNum);
    console.log("The smallest number for line # " + (i + 1) + " is " + smallestNum);

}



/* Q9. Extend the solution for Q1 from objects-question.js so that the customer record now looks like this. 
Use arrays to appropriate model the additional information provided. Ensure you include at least 3 items for the customer to purchase.

Name: Shang Chi
Age: 24
Bank Name: Ten Rings Bank
Bank Account No: 3-534454-2
Country of Residence: Ta Lo
Possible methods of payment: GrabPay, TouchNGo, Credit Card, Shopee Coins
Shopee Coins: 35000
Coin conversion rate: 0.04
Items purchased:
-	Item description: Power Rings
-	Unit price: 52.00
-	Quantity: 10
-	Rating: 4.2
-	Vendor: Marvel Cinematic Universe

-	Item description: Nunchaku
-	Unit price: 22.00
-	Quantity: 2
-	Rating: 4.8
-	Vendor: DC Universe

……
……
……
-	Item description: Double bladed light saber
-	Unit price: 88.00
-	Quantity: 1
-	Rating: 3.2
-	Vendor: Lucas Films

There is a new condition in place on the use of Shopee Coins.

The customer can only pay using Shopee Coins if this is included as one of his possible methods of payment AND the item(s) that he wishes to use Shopee Coins on has a rating of 4.5 and above.

Modify the previous method that you implemented to check again whether the customer is able to pay for part of his overall purchase using Shopee Coins alone. The cash equivalent of the Shopee Coins is obtained by multiplying it with the Coin conversion rate.

Call the object method and change the values for the possible methods of payment and rating for specific items being purchased to verify that it works correctly.

 */


console.log("Solution for Q9");


let customer = {
    name: 'Shang Chi',
    age: 32,
    'Bank Name': 'Ten Rings Bank',
    'Bank Account No': '3-534454-2',
    'Payment methods': ["GrabPay", "TouchnGo", "CreditCard", "ShopeeCoins"],
    country: 'Ta Lo',
    'Shopee Coins': 35000,
    conversion: 0.04,
    itemsPurchased: [
        {
            description: 'Power Rings',
            price: 52.00,
            quantity: 10,
            rating: 4.2,
            vendor: 'Marvel Cinematic Universe'
        },

        {
            description: 'Nunchaku',
            price: 22.00,
            quantity: 2,
            rating: 4.8,
            vendor: 'DC Universe'
        },

        {
            description: 'Double bladed light saber',
            price: 88.00,
            quantity: 1,
            rating: 3.2,
            vendor: 'Lucas Films'
        },
    ],

    canPayWithCoins: function (itemToPurchase) {

        // Check whether the Payment methods string array contains a string
        // with the value of "ShopeeCoins" using the Array higher order find 
        // method
        // https://www.javascripttutorial.net/es6/javascript-array-find/
        let isCoinsSupported = this["Payment methods"].find(element => {
            if (element.includes("ShopeeCoins")) {
                return true;
            }
        });

        console.log("The payment methods for this customer " + (isCoinsSupported ? " supports " : " does not support ") + " Shopee Coins");

        // Check whether the rating of the itemToPurchase is more than 4.5
        let isRatingHighEnough = false;
        let itemIndex = 0;
        for (let i = 0; i < this.itemsPurchased.length; i++) {
            if (itemToPurchase === this.itemsPurchased[i].description) {
                isRatingHighEnough = this.itemsPurchased[i].rating > 4.5;
                itemIndex = i;
                break;
            }
        }
        console.log("The rating of " + itemToPurchase + " is " + (isRatingHighEnough ? " high enough " : " not high enough "));

        let convertToCash = this["Shopee Coins"] * this.conversion;
        let totalItemsCost = this.itemsPurchased[itemIndex].price * this.itemsPurchased[itemIndex].quantity;
        return (convertToCash >= totalItemsCost) && isRatingHighEnough && isCoinsSupported;
    }
}

/* Change between different values of   

- item to purchase description (Nunchaku, Power Rings, Double bladed light saber)
- whether ShopeeCoins  is listed in the payment methods property
- rating of the item to be purchased

to see the different outcomes for the statement below

 */
if (customer.canPayWithCoins('Nunchaku'))
    console.log(customer.name + " can pay with Shopee coins alone. Yay !!!");
else
    console.log(customer.name + " cannot pay with Shopee coins alone. BOO !!!");
