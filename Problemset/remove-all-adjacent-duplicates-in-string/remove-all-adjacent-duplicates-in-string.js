
// @Title: 删除字符串中的所有相邻重复项 (Remove All Adjacent Duplicates In String)
// @Author: 18611454314
// @Date: 2020-01-15 23:26:31
// @Runtime: 80 ms
// @Memory: 42.3 MB

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let strStack = [];
    for (let i = 0; i < S.length; i++) {
        if (!strStack.length) {
            strStack.push(S[i]);
        } else if (strStack[strStack.length - 1] === S[i]) {
            strStack.pop()
        } else {
            strStack.push(S[i]);
        }
    }
    return strStack.join('');
};
