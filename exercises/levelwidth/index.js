// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const answer = [0];
    const stopper = 's';
    const arr = [root, stopper];

    while(arr.length > 1) {
        const node = arr.shift();

        if (node === stopper) {
            answer.push(0);
            arr.push(stopper);
        } else {
            arr.push(...node.children);
            answer[answer.length - 1]++;
        }

    }
    return answer;

}

module.exports = levelWidth;
