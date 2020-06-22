
// @Title: 移除链表元素 (Remove Linked List Elements)
// @Author: 18611454314
// @Date: 2020-01-16 23:19:04
// @Runtime: 88 ms
// @Memory: 37.8 MB

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let guad = new ListNode(0);
    guad.next = head;
    let pre = guad, curr = head;
    while(curr) {
        if (curr.val === val) {
            pre.next = curr.next;
        } else {
            pre = curr;
        }
        curr = curr.next;
    }
    return guad.next;
};
