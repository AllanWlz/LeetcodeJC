
// @Title: 斐波那契数 (Fibonacci Number)
// @Author: 18611454314
// @Date: 2019-12-23 20:39:27
// @Runtime: 56 ms
// @Memory: 33.9 MB

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let g = 0, f = 1;
    while (N--) {
        g += f;
        f = g - f;
    }
    return g;
};
