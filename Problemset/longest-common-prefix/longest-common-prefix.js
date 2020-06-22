
// @Title: 最长公共前缀 (Longest Common Prefix)
// @Author: 18611454314
// @Date: 2019-12-24 21:37:50
// @Runtime: 72 ms
// @Memory: 35.4 MB

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  let queue = [];
  let minLen = Infinity;  // 获取所有字符串中的最短长度
  for (let i = 0; i < strs.length; i++) {
    minLen = (strs[i].length < minLen) ? strs[i].length : minLen;
  }
  let i = 0;
  while (i < minLen) {
    let currentChar = strs[0][i];
    let flag = true;
    for (let j = 1; j < strs.length; j ++) {
      if (strs[j][i] !== currentChar) {
        flag = false
      }
    }
    if (flag) {
      queue.push(currentChar);
    } else {
      break;
    }
    i ++;
  }
  return queue.join('');
};
