
// @Title: 无重复字符的最长子串 (Longest Substring Without Repeating Characters)
// @Author: 18611454314
// @Date: 2019-12-24 21:17:26
// @Runtime: 116 ms
// @Memory: 37 MB

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let maxLen = 0;
    let queue = [];
    let i = 0, j = 0;
    while(i < n && j < n) {
        if (queue.indexOf(s[j]) === -1) {
            queue.push(s[j++]);
            maxLen = (maxLen > j - i) ? maxLen : (j - i);
        } else {
            queue.shift();
            i++;
        }
    }
    return maxLen;
};
