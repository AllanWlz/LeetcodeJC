
// @Title: 有效的括号 (Valid Parentheses)
// @Author: 18611454314
// @Date: 2019-12-23 20:21:41
// @Runtime: 68 ms
// @Memory: 35.1 MB

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let left = ['(', '[', '{'];
    let right = [')', ']', '}'];
    for (let i = 0; i < s.length; i ++) {
        // 左边括号
        if (left.indexOf(s[i]) > -1) {
            stack.push(s[i]);
        }
        // 
        if (right.indexOf(s[i]) > -1) {
            if (stack.length === 0 || right.indexOf(s[i]) !== left.indexOf(stack.pop())) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
