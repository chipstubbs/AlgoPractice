// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;

// My Solution
// function fib(num) {
//     let current = num;
//     let first = 0, second = 1, third = 1;
//     let result = 0;
//     let fib = [0,1,1,2];

//     // [ 0, 1, 1, 2 ]
//     // Start at third index which is 2
//     for ( i = 2; i <= num; i++ ) {
//         third = first + second;
//         first = second;
//         second = third;
      
//         if (i>3) {fib.push(third);}
//     }
//     // console.log(fib);
//     return fib[num];
// }

// Recursive
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }