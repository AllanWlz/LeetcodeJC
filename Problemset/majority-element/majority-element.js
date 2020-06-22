
// @Title: 多数元素 (Majority Element)
// @Author: 18611454314
// @Date: 2020-01-25 22:54:51
// @Runtime: 64 ms
// @Memory: 37.1 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for (let i = 0, c = 0; i < nums.length; i++) {
        if (c === 0) {
            maj = nums[i];
            c = 1;
        } else {
            nums[i] === maj ? c++ : c--;
        }
    }
    return maj;
};

