// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // g says keep going, i means case insensitive
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;

// My Solution
// function vowels(str) {
//     const vowel = [ 'a', 'e', 'i', 'o', 'u'];
//     const strArray = str.toLowerCase().split('');
//     let counter = 0;
//     strArray.forEach( (char,i) => {
//         if (vowel.includes(char)) {
//             counter++;
//         }
//     });
//     return counter;
// }