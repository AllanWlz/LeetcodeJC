
// @Title: 两个数组的交集 II (Intersection of Two Arrays II)
// @Author: 18611454314
// @Date: 2020-01-18 19:59:01
// @Runtime: 60 ms
// @Memory: 34.3 MB

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        if (index > -1) {
            result.push(nums1[i]);
            nums2[index] = '';
        }
    }
    return result;
};
