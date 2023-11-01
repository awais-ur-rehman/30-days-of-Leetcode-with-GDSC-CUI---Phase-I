/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let maxCount = 0;
    let currentCount = 0;
    let prevValue = null;
    let modes = [];

    function inOrderTraversal(node) {
        if (node === null) {
            return;
        }

        inOrderTraversal(node.left);

        if (node.val === prevValue) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            modes = [node.val];
        } else if (currentCount === maxCount) {
            modes.push(node.val);
        }

        prevValue = node.val;

        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);

    return modes;
};
