/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sortedArrayToBST = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let mid = Math.floor(arr.length/2);
  const curr = new TreeNode(arr[mid]);
  curr.left = sortedArrayToBST(arr.slice(0, mid));
  curr.right = sortedArrayToBST(arr.slice(mid+1));
  return curr;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]));