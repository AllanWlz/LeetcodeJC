
// @Title: 有效的字母异位词 (Valid Anagram)
// @Author: 18611454314
// @Date: 2019-12-23 20:27:09
// @Runtime: 128 ms
// @Memory: 40.7 MB

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sArr = [];
    let tArr = [];
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        sArr.push(s[i]);
        tArr.push(t[i]);
    }
    sArr.sort(); tArr.sort();
    let flag = true;
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) {
            flag = false;
        }
    }
    return flag;
};
