/*
Given a linked list <1, 2, 3, 4, 5, 6>, zip of this linked list is defined as 1, 6 , 2, 5 , 3, 4. And the task is to achieve desired linked list using O(1) space. */

function LinkedList(val) {
  this.val = val;
  this.next = null;
}

function generateLinkedList(start, end) {
  let curr = new LinkedList(start);
  let head = curr;
  let next;

  for (let i = start+1; i <= end; i++) {
    next = new LinkedList(i);
    curr.next = next;
    curr = next;
  }
  return head;
}

function reverseLinkedList(root) {
  if (root === null || root.next === null) {
    return root;
  }
  let curr = root;
  let next = curr.next;
  curr.next = null;
  let temp;
  while (next !== null) {
    temp = next.next;
    next.next = curr;
    curr = next;
    next = temp
  }
  return curr;
}

function zipLinkedList(root) {
  if (root === null || root.next === null) {
    return root;
  }
  let count = 0;
  let curr = root;
  while (curr !== null) {
    count++;
    curr = curr.next;
  }
  const half = Math.ceil(count/2);
  let i = 0;
  let secondHalf = root;
  let firstHalf;
  while (i < half) {
    i++;
    firstHalf = secondHalf;
    secondHalf = secondHalf.next;
  }
  firstHalf.next = null;
  const reversedSecond = reverseLinkedList(secondHalf);
  let temp1, temp2;
  let curr1 = root, curr2 = reversedSecond;

  const head = root;
  let end;
  while (curr2 !== null) {
    temp1 = curr1.next;
    temp2 = curr2.next;
    curr1.next = curr2;
    curr2.next = temp1;
    curr1 = temp1;
    curr2 = temp2;
  }
  return head;
}

// let node1 = zipLinkedList(generateLinkedList(1,7));
let node2 = zipLinkedList(generateLinkedList(1,5));
// console.log(node, 'here nodez');
// const node1 = generateLinkedList(1,5);
// const node2 = generateLinkedList(1,4);

// console.log(zipLinkedList(node1));
// console.log(zipLinkedList(node2));
// while (node1 !== null) {
//   console.log(node1.val);
//   node1 = node1.next;
// }
console.log('llllllll---llllll---llllll');
while (node2 !== null) {
  console.log(node2.val);
  node2 = node2.next;
}
console.log('llllllll---llllll---llllll');
console.log(zipLinkedList(new LinkedList(1)));
// console.log(reverseLinkedList(new LinkedList(1)));
// console.log(reverseLinkedList(node));
