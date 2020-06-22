
// @Title: 最小栈 (Min Stack)
// @Author: 18611454314
// @Date: 2020-01-15 12:17:06
// @Runtime: 108 ms
// @Memory: 45.2 MB

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.minArr = [];
    this.minVal = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x <= this.minVal) {
        this.minVal = x;
        this.minArr.push(this.minVal);
        this.arr.push(x);
    } else {
        this.arr.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popVal = this.arr.pop();
    if (popVal === this.minArr[this.minArr.length - 1]) {
        this.minArr.pop();
        if (this.minArr.length) {
            this.minVal = this.minArr[this.minArr.length - 1];
        } else {
            this.minVal = Infinity;
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minArr[this.minArr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
