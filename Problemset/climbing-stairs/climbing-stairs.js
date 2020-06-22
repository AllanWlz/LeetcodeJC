
// @Title: 爬楼梯 (Climbing Stairs)
// @Author: 18611454314
// @Date: 2019-12-23 20:37:42
// @Runtime: 60 ms
// @Memory: 34.2 MB

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    let f = 0;
    let g = 1;
    while (n--) {
        g += f;
        f = g - f;
    }
    return g;
};
