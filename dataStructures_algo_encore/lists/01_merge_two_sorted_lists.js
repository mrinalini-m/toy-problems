/* 21. Merge Two Sorted Lists (Easy)
https://leetcode.com/problems/merge-two-sorted-lists/
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4 */
/**
 *
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

var mergeTwoLists = function(l1, l2) {}

function ListNode(val) {
  this.val = val
  this.next = null
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)
const n6 = new ListNode(6)

node1.next = node2
node2.next = node4
n1.next = n3
n3.next = n4
// node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node5
// n2.next = n3
// n3.next = n4
// n4.next = n5
// n5.next = n6

const l1 = node1
// const l2 = n2
const l2 = n1

const sortedList = mergeTwoLists(l1, l2)
console.log(sortedList)
let curr = sortedList
while (curr.next) {
  console.log(curr.val)
  curr = curr.next
}
