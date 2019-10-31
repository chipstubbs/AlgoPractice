// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    if ( max && node.data > max) return false;

    if ( min && node.data < min ) return false;

    let isLeftValid = true; 
    let isRightValid = true;

    if (node.left) isLeftValid = validate(node.left, min, node.data) ;
    if (node.right) isRightValid = validate(node.right, node.data, max);

    return isLeftValid && isRightValid;
}

module.exports = validate;

// function validate(node, min = null, max = null) {
//     if (max !== null && node.data > max) {
//         return false;
//     }

//     if (min !== null && node.data < min) {
//         return false;
//     }

//     if (node.left && !validate(node.left, min, node.data)) {
//         return false;
//     }

//     if (node.right && !validate(node.right, node.data, max)) {
//         return false;
//     }

//     return true;
// }