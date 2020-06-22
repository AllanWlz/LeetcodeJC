
// @Title: 两数相加 (Add Two Numbers)
// @Author: 18611454314
// @Date: 2019-12-26 17:53:22
// @Runtime: 136 ms
// @Memory: 38.7 MB

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let originalL3 = new ListNode(0);
    let l3 = originalL3;
    while (l1 || l2) {
        let nextVal;
        // 当l1访问到Null
        if (!l1) {
            // 当l2到头时
            nextVal = (l2.val + carry) % 10;
            carry = Math.floor((l2.val + carry) / 10);
            l2 = l2.next;
        } else if (!l2) {
            // l1 和 l2均未到头
            nextVal = (l1.val + carry) % 10;
            carry = Math.floor((l1.val + carry) / 10);
            l1 = l1.next;
        } else {
            nextVal = (l1.val + l2.val+ carry) % 10 ;
            carry = Math.floor((l1.val + l2.val+ carry) / 10);
            l1 = l1.next;
            l2 = l2.next;
        }
        l3.next = new ListNode(nextVal);
        l3 = l3.next;
    }
    // 最后需要判断carry是否已经加完
    if (carry) {
        l3.next = new ListNode(carry);
        l3.next.next = null;
    } else {
        l3.next = null;
    }
    return originalL3.next;
};
