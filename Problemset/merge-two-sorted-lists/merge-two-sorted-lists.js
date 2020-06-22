
// @Title: 合并两个有序链表 (Merge Two Sorted Lists)
// @Author: 18611454314
// @Date: 2020-01-26 21:40:14
// @Runtime: 92 ms
// @Memory: 35.8 MB

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
var mergeTwoLists = function(l1, l2) {
    // 先用任意值初始化一个链表节点（后续只要取其下一个节点即可！）
    let mergedList = new ListNode(0);
    let initialMergedList = mergedList;
    while (l1 || l2) {
        if (!l1) { // l1 null and l2 not null
            mergedList.next = new ListNode(l2.val);
            l2 = l2.next;
        } else if (!l2) {  // l2 null and l1 not null
            mergedList.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {  // l1 and l2 both not null
            if (l1.val < l2.val) {
                mergedList.next = new ListNode(l1.val);
                l1 = l1.next;
            } else {
                mergedList.next = new ListNode(l2.val);
                l2 = l2.next;
            }
        }
        mergedList = mergedList.next;
    }
    return initialMergedList.next;
};
