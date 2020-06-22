
// @Title: 环形链表 (Linked List Cycle)
// @Author: 18611454314
// @Date: 2020-01-16 22:12:26
// @Runtime: 76 ms
// @Memory: 37.6 MB

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let nodeSet = new Set();
    while (head) {
        nodeSet.add(head);
        head = head.next;
        if (nodeSet.has(head)) {
            return true;
        }
    }
    return false;
};
