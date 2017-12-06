/*https://leetcode.com/problems/invert-binary-tree/description/

Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var invertTree = function(root) {
  if (root === null) {
    return null;
  }
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

const nine = new TreeNode(9);
const seven = new TreeNode(7);
const six = new TreeNode(6);
const four = new TreeNode(4);
const three = new TreeNode(3);
const two = new TreeNode(2);
const one = new TreeNode(1);

four.left = two;
four.right = seven;
two.left = one;
two.right = three;
seven.left = six
seven.right = nine;

console.log(invertTree(null));
console.log(invertTree(four));