
// @Title: 相同的树 (Same Tree)
// @Author: 18611454314
// @Date: 2020-01-18 18:17:07
// @Runtime: 60 ms
// @Memory: 34.4 MB

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {  // 两者同为null
        return true;
    } else if (!p || !q) {  // 其中只一个为null
        return false;
    } else {
        if (p.val !== q.val) {
            return false;
        }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};

