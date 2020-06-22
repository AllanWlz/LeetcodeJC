
// @Title: 数组中的第K个最大元素 (Kth Largest Element in an Array)
// @Author: 18611454314
// @Date: 2020-01-26 21:38:57
// @Runtime: 84 ms
// @Memory: 37.1 MB

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function(nums, k) {
    // 建立小顶堆
    let priorityQueue = new PriorityQueue((a, b) => {return b < a ? b : a});
    // 先给k个进去
    for (let i = 0; i < k; i++) {
        priorityQueue.insert(nums[i]);
    }
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > priorityQueue.getTop()) {
            priorityQueue.delTop();
            priorityQueue.insert(nums[i]);
        }
    }
    return priorityQueue.getTop();
};

function PriorityQueue(getPrior) {
  this._pq = [];
  this._size = 0;
  // getPrior(pNode, cNode) if cNode has higher priority than pNode then return cNode, else return pNode
  this._getPrior = getPrior;
}

PriorityQueue.prototype.getSize = function () {
  return this._size;
};

PriorityQueue.prototype.insert = function (ele) {
  // 在末尾加入该元素后，上滤
  this._pq[this._size++] = ele;
  this._percolateUp(this._size - 1);
};

PriorityQueue.prototype.getTop = function () {
  if (!this._pq.length) {
    throw new Error('Empty PriorityQueue');
  }
  return this._pq[0];
};

PriorityQueue.prototype.delTop = function () {
  if (this._pq.length === 0) {
    throw new Error('Empty PriorityQueue');
  }
  if (this._size === 1) {
    let maxEle = this._pq[0];
    this._pq = [];
    this._size = 0;
    return maxEle;
  } else {
    let maxEle = this._pq[0];
    this._pq[0] = this._pq.pop();
    this._size --;
    this._percolateDown(this._size, 0);
    return maxEle;
  }
};

PriorityQueue.prototype._percolateUp = function (index) {
  // index 当前父结点的 秩
  let pIndex = Math.floor((index - 1) / 2);
  while (pIndex >= 0) {
    if (this._getPrior(this._pq[pIndex], this._pq[index]) === this._pq[pIndex]) {  // 若当前结点的父结点值大
      break;
    } else {  // 否则交换值
      let tmp = this._pq[pIndex];
      this._pq[pIndex] = this._pq[index];
      this._pq[index] = tmp;
      index = pIndex;
      pIndex = Math.floor((index - 1) / 2);
    }
  }
};

// n 为priorityQueue 的大小，主要用来辅助判断其子是否合法
PriorityQueue.prototype._percolateDown = function (n, index) {
  let properIndex = this._getProperParent(n, index);
  while (index !== properIndex) {
    let tmp = this._pq[properIndex];
    this._pq[properIndex] = this._pq[index];
    this._pq[index] = tmp;
    index = properIndex;
    properIndex = this._getProperParent(n, index);
  }
};

// [0, n) 是合法秩
PriorityQueue.prototype._getProperParent = function (n, index) {
  let lcIndex = index * 2 + 1, rcIndex = index * 2 + 2;
  return this._getValidBiggerIndex(n, this._getValidBiggerIndex(n, index, lcIndex), rcIndex);
};

PriorityQueue.prototype._getValidBiggerIndex = function (size, pIndex, cIndex) {
  // 子结点的index可能非法
  if (cIndex >= size) {
    return pIndex;
  } else {
    // 只有当子结点大于父结点才替换，等于或小于不替换
    return this._getPrior(this._pq[pIndex], this._pq[cIndex]) === this._pq[cIndex] ? cIndex : pIndex;
  }
};
