
// @Title: 删除排序链表中的重复元素 (Remove Duplicates from Sorted List)
// @Author: 18611454314
// @Date: 2020-01-16 21:51:14
// @Runtime: 60 ms
// @Memory: 36 MB

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
var deleteDuplicates = function(head) {
    let initHead = head;
    let nextNode;
    while (head) {
        nextNode = head.next;
        while (nextNode && head.val === nextNode.val) {
            nextNode = nextNode.next
        }
        head.next = nextNode;
        head = head.next;
    }
    return initHead;
};
