
// @Title: 最近的请求次数 (Number of Recent Calls)
// @Author: 18611454314
// @Date: 2020-01-16 20:51:14
// @Runtime: 284 ms
// @Memory: 56.5 MB

let RecentCounter = function() {
    this.pingQueue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.pingQueue.push(t);
    while(t - this.pingQueue[0] > 3000) {
        this.pingQueue.shift()
    }
    return this.pingQueue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
