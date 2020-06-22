
// @Title: 下一个更大元素 I (Next Greater Element I)
// @Author: 18611454314
// @Date: 2020-01-15 21:47:29
// @Runtime: 72 ms
// @Memory: 36.9 MB

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let resultMap = new Map();
    let monotonicStack = [];
    for (let val of nums2) {
        if (!monotonicStack.length) {
            // 当栈内为空的时候，push
            monotonicStack.push(val);
        } else if (val > monotonicStack[monotonicStack.length - 1]) {
            // 当下一个元素比栈顶元素更大，不断推出栈顶元素加入到哈希表，直至栈清空或栈顶元素不小于val
            while (monotonicStack.length && monotonicStack[monotonicStack.length - 1] < val) {
                resultMap.set(monotonicStack.pop(), val);
            }
            monotonicStack.push(val);
        } else {
            // 当下一个元素比
            monotonicStack.push(val);
        }
    }
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let nextVal = resultMap.get(nums1[i]);
        if (nextVal) {
            result.push(nextVal);
        } else {
            result.push(-1);
        }
    }
    return result;
};

