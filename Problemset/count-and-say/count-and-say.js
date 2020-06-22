
// @Title: 外观数列 (Count and Say)
// @Author: 18611454314
// @Date: 2020-01-22 22:31:37
// @Runtime: 56 ms
// @Memory: 35.4 MB

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }
    let nStr = '1';
    let i = 2;
    while (i <= n) {
        nStr = say(nStr);
        i ++;
    }
    return nStr;
};

function say (str) {
  let count = 0, curStr = '';
  let sayStr = '';
  for (let i = 0; i < str.length; i++) {
    // 初始情况
    if (count === 0) {
        count ++;
        curStr = str[i];
    } else if (curStr === str[i]){
        count ++;
    } else {
        sayStr = sayStr + count + curStr;
        count = 1;
        curStr = str[i];
    }
  }
  if (count) {
    // 清空
    sayStr = sayStr + count + curStr;
  }
  return sayStr;
}

