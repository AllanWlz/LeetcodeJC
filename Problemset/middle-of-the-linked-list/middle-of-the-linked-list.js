
// @Title: 链表的中间结点 (Middle of the Linked List)
// @Author: 18611454314
// @Date: 2020-01-17 21:33:47
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
 * @return {ListNode}
 */
var middleNode = function(head) {
    // 先获得当前链表的长度，然后返回第 Math.floor(len / 2) + 1 个元素
    let midLen = Math.floor(getLinkedListLen(head) / 2) + 1;
    while (--midLen) {
        head = head.next;
    }
    return head;
};

function getLinkedListLen (head) {
    let len = 0;
    while (head) {
        len ++;
        head = head.next;
    }
    return len;
}

