
// @Title: 对称二叉树 (Symmetric Tree)
// @Author: 18611454314
// @Date: 2020-01-18 18:32:17
// @Runtime: 76 ms
// @Memory: 35.3 MB

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 空树认为是镜像对称的
    if (!root) {
        return true;
    }
    return symmetricWalk(root.left, root.right);
};

// 镜像地访问两棵树
function symmetricWalk (leftRoot, rightRoot) {
    // 同时为空
    if (!leftRoot && !rightRoot) {
        return true;
    } else if (!leftRoot || !rightRoot) {
        return false;
    } else {
        if (leftRoot.val !== rightRoot.val) {
            return false;
        } else {
            return symmetricWalk(leftRoot.left, rightRoot.right) && symmetricWalk(leftRoot.right, rightRoot.left);
        }
    }
}

