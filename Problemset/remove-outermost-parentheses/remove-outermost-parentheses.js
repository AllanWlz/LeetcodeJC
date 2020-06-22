
// @Title: 删除最外层的括号 (Remove Outermost Parentheses)
// @Author: 18611454314
// @Date: 2020-01-15 23:14:31
// @Runtime: 64 ms
// @Memory: 37.4 MB

/**
 * @param {string} S
 * @return {string}
 */
let removeOuterParentheses = function(S) {
    let outStr = '';  // 最终输出的字符串
    let shortStr = '';  // 存储每段的字符串
    let strStack = [];  // 括号栈
    // 栈每清空一次，就获得一个字段
    for (let i = 0; i < S.length; i++) {
        switch (S[i]) {
            case '(':
                strStack.push('(');
                shortStr += S[i];
                break;
            case ')':
                strStack.pop();
                shortStr += S[i];
                break;
            default:
                shortStr += S[i];
                break;
        }
        // 当栈清空了，则获得一个字段
        if (!strStack.length) {
            outStr += shortStr.substring(1, shortStr.length - 1);
            shortStr = '';  // 注意要记得初始化shortStr
        }
    }
    return outStr;
};
