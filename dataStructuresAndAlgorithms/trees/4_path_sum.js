/*https://leetcode.com/problems/path-sum/description/
112. Path Sum
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


const hasPathSum = (root, sum) => {
  if (root === null) {
    return false;
  }
  const total = sum - root.val;
  if (total === 0 && !root.left && !root.right) {
    return true;
  }
  const left = hasPathSum(root.left, total);
  const right = hasPathSum(root.right, total);
  return left || right;
};

let one = new TreeNode(1);
let two = new TreeNode(2);
one.left = two

console.log(hasPathSum(one, 1));