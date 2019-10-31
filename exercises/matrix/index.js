// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for ( i=0; i<n; i++ ) { 
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while(startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for ( i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right Column
        for ( i = startRow; i <= endRow; i++ ) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // Bottom Row
        for ( i = endColumn; i >= startColumn; i-- ) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start Column
        for ( let i = endRow; i >= startRow; i-- ) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;


    }
    
    return results;
}

module.exports = matrix;


// function printSpiral(A){
//     var startColumn = 0;
//     var endColumn = A[0].length - 1;
//     var startRow = 0;
//     var endRow = A.length - 1;
//     var dir = 0;
//     var arr = [];
  
//     while(startColumn <= endColumn && startRow <= endRow) {
//       //top row
//       if (dir === 0) {
//         for(var i = startColumn; i <= endColumn; i++) {
//           arr.push(A[startRow][i]);
//         }
//         startRow++;
//         dir = 1;
//       }
//       // right column
//       else if (dir === 1){
//         for(i = startRow; i <= endRow; i++ ) {
//           arr.push(A[i][endColumn]);
//         }
//         endColumn--;
//         dir = 2;
//       }
      
//       //bottom row
//       else if (dir === 2) {
//         for(i = endColumn; i >= startColumn; i--) {
//           arr.push(A[endRow][i]);
//         }
//         endRow--;
//         dir = 3;
//       }
//       // start column
//       else if (dir === 3) {
//         for(i = endRow; i >= startRow; i--) {
//           arr.push(A[i][startColumn]);
//         }
//         startColumn++;
//         dir = 0;
//       }
      
//     }
  
  
//     return arr;
//   }
  
//   var ar = [
//       [ 1, 2, 3 ],
//       [ 4, 5, 6 ],
//       [ 7, 8, 9 ]
//   ];
  
//   console.log(spiral(ar));