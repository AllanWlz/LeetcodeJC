
// @Title: 比较含退格的字符串 (Backspace String Compare)
// @Author: 18611454314
// @Date: 2020-01-15 22:37:33
// @Runtime: 68 ms
// @Memory: 35.4 MB

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
let backspaceCompare = function(S, T) {
    return removeBackspace(S) === removeBackspace(T);
};

function removeBackspace (S) {
    let stringStack = [];
    for (let i = 0; i < S.length; i++) {
        switch (S[i]) {
            case '#':
                stringStack.pop();
                break;
            default:
                stringStack.push(S[i]);
                break;
        }
    }
    return stringStack.join('');
}

