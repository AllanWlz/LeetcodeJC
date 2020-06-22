
// @Title: 棒球比赛 (Baseball Game)
// @Author: 18611454314
// @Date: 2020-01-15 22:25:06
// @Runtime: 76 ms
// @Memory: 36 MB

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let scoreStack = [];
    for (let val of ops) {
        switch (val) {
            case '+':
                scoreStack.push(scoreStack[scoreStack.length - 1] + scoreStack[scoreStack.length - 2]);
                break;
            case 'C':
                scoreStack.pop();
                break;
            case 'D':
                scoreStack.push(scoreStack[scoreStack.length - 1] * 2);
                break;
            default:
                scoreStack.push(parseInt(val));
                break;
        }
    }
    let totalScore = 0;
    while (scoreStack.length) {
        totalScore += scoreStack.pop();
    }
    return totalScore;
};
