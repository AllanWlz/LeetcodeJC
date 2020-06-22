
// @Title: 两个数组的交集 (Intersection of Two Arrays)
// @Author: 18611454314
// @Date: 2020-01-15 23:57:01
// @Runtime: 56 ms
// @Memory: 34.8 MB

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let outArr = [];
    for (let s of set1) {
        if (set2.has(s)) {
            outArr.push(s);
        }
    }
    return outArr;
};
