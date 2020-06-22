
// @Title: 最长连续递增序列 (Longest Continuous Increasing Subsequence)
// @Author: 18611454314
// @Date: 2020-01-25 20:40:22
// @Runtime: 64 ms
// @Memory: 35.1 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
let findLengthOfLCIS = function(nums) {
    // 针对空数组，返回 0
    if (nums.length === 0) {
        return 0;
    }
    let maxFlag = 1, flag = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            flag ++;
        } else {
            // 出现不再递增的情况，如果此次递增子序列大于之前记录的最大值，则更新
            if (flag > maxFlag) {
                maxFlag = flag;
            }
            flag = 1;
        }
    }
    // 最后判断是否需要更新最大子序列长度
    if (flag > maxFlag) {
        maxFlag = flag;
    }
    return maxFlag;
};
