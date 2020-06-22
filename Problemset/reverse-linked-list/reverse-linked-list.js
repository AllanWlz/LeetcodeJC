
// @Title: 反转链表 (Reverse Linked List)
// @Author: 18611454314
// @Date: 2020-01-26 21:43:54
// @Runtime: 72 ms
// @Memory: 34.8 MB

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
    let pre = null, curr = head, tmp;
    while(curr) {
        tmp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = tmp;
    }
    return pre;
};
