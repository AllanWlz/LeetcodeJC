
// @Title: 最长连续序列 (Longest Consecutive Sequence)
// @Author: 18611454314
// @Date: 2020-01-27 12:15:15
// @Runtime: 76 ms
// @Memory: 36.2 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let hashSet = new Set(nums);
    let maxLength = 0, currLength = 0;
    for (let ele of hashSet) {
        // 这里是抄的思路，为了避免多次重复计数，只对子序列首元素的进行计算
        if (!hashSet.has(ele - 1)) {
            // 记录当前元素
            currLength ++;
            while(hashSet.has(ele + 1)) {
                ele = ele + 1;
                currLength ++;
            }
            maxLength = Math.max(maxLength, currLength);
            // 需要初始化当前长度为 0
            currLength = 0;
        }
    }
    return maxLength;
};
