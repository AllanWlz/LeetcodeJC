
// @Title: 相交链表 (Intersection of Two Linked Lists)
// @Author: 18611454314
// @Date: 2020-01-27 11:08:51
// @Runtime: 104 ms
// @Memory: 43.1 MB

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 先遍历两个长度
    // 然后长的指针先走，等走到剩余长度和短的相同时，短链表的指针开始走
    // 如果会相遇，计算后面相遇的长度
    let lenA = getLinkedListLength(headA);
    let lenB = getLinkedListLength(headB);
    let longerHead, shorterHead, distance;
    if (lenA > lenB) {
        distance = lenA - lenB;
        longerHead = headA;
        shorterHead = headB;
    } else {
        distance = lenB - lenA;
        longerHead = headB;
        shorterHead = headA;
    }

    // 长的先走，走的距离为（长 - 短）
    while (distance -- > 0) {
        longerHead = longerHead.next;
    }

    // 现在一起走
    while (shorterHead) {
        if (shorterHead === longerHead) {
            return shorterHead;
        }
        longerHead = longerHead.next;
        shorterHead = shorterHead.next;
    }
    return null;
};

function getLinkedListLength (head) {
    let len = 0;
    while (head) {
        len += 1;
        head = head.next;
    }
    return len;
}
