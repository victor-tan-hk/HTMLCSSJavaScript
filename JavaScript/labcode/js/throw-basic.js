
// We can also choose to throw our own custom exceptions
// to signal specific error conditions in our code
function doMultiplication(x, y) {
    if (typeof x !== 'number') {
        throw new Error('The first argument must be a number');
    }
    if (typeof y !== 'number') {
        throw new Error('The second argument must be a number');
    }

    return x + y;
}

// This works fine
console.log("Multiplying 3 with 5 gives :", doMultiplication(3, 5));

// This causes an exception
// Comment it out to allow program to run
//console.log("Multiplying cat with dog gives :", doMultiplication('cat', 'dog'));

// Using a try-catch block

try {
    console.log("Multiplying cat with dog gives :", doMultiplication('cat', 'dog'));
} catch (err) {
    console.log('The error that has occurred is :', err.name);
    console.log('The detailed message for that error is :', err.message);
}
