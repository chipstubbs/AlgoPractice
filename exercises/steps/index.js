// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, step = '') {
    if (n === row) {
        return;
    }

    if (n === step.length) {
        console.log(step);
        // steps(n, row + 1);
        // return;
        return steps(n, row + 1);
    }

    if(step.length <= row) {
        step += '#';
    } else {
        step += ' ';
    }
    steps(n, row, step);
}

module.exports = steps;

// My Solution 
// function steps(n) {
//     if (n < 0) { n = n * -1 }
//     for (i=1; i < n + 1; i++) {
//         const space = ' ';
//         const pound = '#';
//         console.log(pound.repeat(i) + space.repeat(n-i));
//     }
// }

// Matrix style solution
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let step = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 step += '#';
//             } else {
//                 step += ' ';
//             }
//         }
//         console.log(step);
//     }
// }

// function steps(n) {
//     let step_arr = new Array(n).fill(' ');
//     let i = 0;
//     while (i < n) {
//         step_arr[i] = '#';
//         console.log(step_arr.join(''));
//         i++;
//     }
// }

// Recursive Solution
// function steps(n, row = 0, step = '') {
//     if (n === row) {
//         return;
//     }

//     if (n === step.length) {
//         console.log(step);
//         // steps(n, row + 1);
//         // return;
//         return steps(n, row + 1);
//     }

//     if(step.length <= row) {
//         step += '#';
//     } else {
//         step += ' ';
//     }
//     steps(n, row, step);
// }

// function steps(n, pounds = 1) { 
//     // base case:
//     if (pounds > n) {
//         return;
//     }
 
//     let stair = [];
//     for (let i = 1; i <= n; i++) {
//         if (i <= pounds) {
//             stair.push('#');
//         } else {
//             stair.push(' ');
//         }
//     }
//     console.log(stair.join(''));
//     steps(n, ++pounds);
// }