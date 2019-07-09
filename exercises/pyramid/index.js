// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1) {
    const space = ' ';
    const pound = '#';
    
    // Base Case
    if (n === row) {
        console.log(pound.repeat( (n*2)-1) );
        return;
    }

    // Log each row 
    if (n > row) {
        console.log( space.repeat(n - row) + pound.repeat( (row * 2) - 1 ) + space.repeat( n - row ) );
    }

    // Loop recursively until rows = n
    pyramid(n, row + 1);
}

module.exports = pyramid;

// My Solutions
// function pyramid(n) {
//     if (n < 0) { n = n * -1; }
//     let pyr = '';
//     for (i=1; i <= n; i++) {
//       const space = ' ';
//       const pound = '#';
//       if(i === n) {
//         pyr = pound.repeat((n*2)-1);
//       } else {
//         pyr = (space.repeat(n-i) + pound.repeat((i*2)-1) + space.repeat(n-i) );
//       }
//       console.log(pyr);
//     }
// }

