
// @Title: 二进制链表转整数 (Convert Binary Number in a Linked List to Integer)
// @Author: 18611454314
// @Date: 2020-01-17 22:01:17
// @Runtime: 68 ms
// @Memory: 34.2 MB

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
let getDecimalValue = function(head) {
    // 二进制数左移，相当于乘以2。链表指针
    let sum = 0;
    while (head) {
        sum = sum * 2 + head.val;
        head = head.next;
    }
    return sum;
};
