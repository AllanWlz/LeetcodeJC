
// @Title: 两数之和 (Two Sum)
// @Author: 18611454314
// @Date: 2019-12-24 20:06:39
// @Runtime: 332 ms
// @Memory: 35.2 MB

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (j !== i && nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
