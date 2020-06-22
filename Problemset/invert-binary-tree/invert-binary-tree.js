
// @Title: 翻转二叉树 (Invert Binary Tree)
// @Author: 18611454314
// @Date: 2020-01-18 19:48:11
// @Runtime: 60 ms
// @Memory: 34.2 MB

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    } else {
        let tmp = root.right;
        root.right = invertTree(root.left);
        root.left = invertTree(tmp);
        return root;
    }
};

