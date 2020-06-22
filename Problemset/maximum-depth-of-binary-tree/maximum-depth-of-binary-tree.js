
// @Title: 二叉树的最大深度 (Maximum Depth of Binary Tree)
// @Author: 18611454314
// @Date: 2020-02-24 20:23:15
// @Runtime: 72 ms
// @Memory: 36.9 MB

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    function digIntoTree(node, depth) {
        if (node) {
            if (depth > maxDepth) {
                maxDepth = depth;
            }
            digIntoTree(node.left, depth + 1);
            digIntoTree(node.right, depth + 1);
        }
    }
    let maxDepth = 0;
    digIntoTree(root, 1);
    return maxDepth;
};

