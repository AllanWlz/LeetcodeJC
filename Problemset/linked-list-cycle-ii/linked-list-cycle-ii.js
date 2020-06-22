
// @Title: 环形链表 II (Linked List Cycle II)
// @Author: 18611454314
// @Date: 2020-01-27 00:51:00
// @Runtime: 88 ms
// @Memory: 36.7 MB

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
var detectCycle = function(head) {
    // 处理无结点及单个非环结点情况
    if (head === null || head.next == null) {
        return null;
    }
    // 快慢指针，快指针在前，慢指针在后，并保存初始结点
    let fst = head, slw = head, initHead = head;
    while (slw && slw.next && fst && fst.next && fst.next.next) {
        slw = slw.next;
        fst = fst.next.next;
        // fst 和 slw 在相遇点相遇
        if (slw === fst) {
            while (slw !== initHead) {
                slw = slw.next;
                initHead = initHead.next;
            }
            return slw;
        }
    }
    return null;
};

