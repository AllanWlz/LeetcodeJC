
// @Title: 最后一块石头的重量 (Last Stone Weight)
// @Author: 18611454314
// @Date: 2020-01-20 00:15:39
// @Runtime: 60 ms
// @Memory: 34.4 MB

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let priorityQueue = new PriorityQueue();
    // 先将所有石头置入堆内
    for (let stone of stones) {
        priorityQueue.insert(stone);
    }
    // 当堆非空时
    let no1Stone, no2Stone, diff;
    while (priorityQueue.getSize()) {
        no1Stone = priorityQueue.delMax();
        // 如果出来第一个石头，堆就空了
        if (priorityQueue.getSize() === 0) {
            return no1Stone;
        }
        no2Stone = priorityQueue.delMax();
        diff = no1Stone - no2Stone;
        if (diff > 0) {
            priorityQueue.insert(diff);
        }
    }
    return 0;
};

function PriorityQueue() {
  this._pq = [];
  this._size = 0;
}

PriorityQueue.prototype.getSize = function () {
  return this._size;
};

PriorityQueue.prototype.insert = function (ele) {
  // 在末尾加入该元素后，上滤
  this._pq[this._size++] = ele;
  this._percolateUp(this._size - 1);
};

PriorityQueue.prototype.getMax = function () {
  if (!this._pq.length) {
    throw new Error('Empty PriorityQueue');
  }
  return this._pq[0];
};

PriorityQueue.prototype.delMax = function () {
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
    if (this._pq[pIndex] >= this._pq[index]) {  // 若当前结点的父结点值大于等于当前结点，终止
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

//
PriorityQueue.prototype._getValidBiggerIndex = function (size, pIndex, cIndex) {
  // 子结点的index可能非法
  if (cIndex >= size) {
    return pIndex;
  } else {
    // 只有当子结点大于父结点才替换，等于或小于不替换
    return this._pq[cIndex] > this._pq[pIndex] ? cIndex : pIndex;
  }
};

