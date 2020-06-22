
// @Title: 删除链表中的节点 (Delete Node in a Linked List)
// @Author: 18611454314
// @Date: 2020-01-17 17:05:18
// @Runtime: 64 ms
// @Memory: 35.7 MB

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
