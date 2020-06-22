
// @Title: 第 N 个泰波那契数 (N-th Tribonacci Number)
// @Author: 18611454314
// @Date: 2020-01-21 21:48:58
// @Runtime: 64 ms
// @Memory: 33.8 MB

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        let first = 0, second = 1, third = 1, forth;
        while (n -- > 2) {
            forth = first + second + third;
            first = second;
            second = third;
            third = forth;
        }
        return forth;
    }
};
