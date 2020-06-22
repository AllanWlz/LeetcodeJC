
// @Title: 二叉树的层次遍历 II (Binary Tree Level Order Traversal II)
// @Author: 18611454314
// @Date: 2020-01-18 19:34:35
// @Runtime: 72 ms
// @Memory: 35.4 MB

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrderBottom = function(root) {
    // 针对空的情况
    if (!root) {
        return [];
    } else {
        // 结果
        let result = [];
        // 辅助队列
        let treeNodeQueue = [];
        treeNodeQueue.push(root);
        root.depth = 0;
        while (treeNodeQueue.length) {
            let node = treeNodeQueue.shift();
            if (node.left) {
                node.left.depth = node.depth + 1;
                treeNodeQueue.push(node.left);
            }
            if (node.right) {
                node.right.depth = node.depth + 1;
                treeNodeQueue.push(node.right);
            }
            if (result[node.depth]) {
                result[node.depth].push(node.val);
            } else {
                result[node.depth] = [node.val];
            }
        }
        return result.reverse();
    }
};
