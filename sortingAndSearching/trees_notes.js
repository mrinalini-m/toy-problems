//Notes and practice with trees

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function searchBST(tree, target) {
  if (tree === null) {
    return false;
  }

  if (target === tree.val) {
    return true;
  } else if (target < tree.val) {
    return searchBST(tree.left, target);
  } else if (target > tree.val) {
    return searchBST(tree.right, target);
  }
}

const inOrderTraverse = (tree) => {
  if (tree === null) {
    return;
  }
  inOrderTraverse(tree.left);
  console.log(tree.val);
  inOrderTraverse(tree.right);
}

const preOrder = (tree) => {
  if (tree === null) {
    return;
  }
  console.log(tree.val);
  preOrder(tree.left);
  preOrder(tree.right);
}

const postOrder = (tree) => {
  if (tree === null) {
    return;
  }
  postOrder(tree.left);
  postOrder(tree.right);
  console.log(tree.val);
}
let toCheck =  {
  val: 15,
  right:
   {
     val: 6,
     right: { val: 20, right: null, left: null },
     left: null },
  left:
   {
     val: 10,
     right: { val: 5, right: null, left: null },
     left: null } }

toCheck =  {
  val: 10,
  right: 
    {
     val: 15,
     right:  { val: 20, right: null, left: null },
     left:  { val: 6, right: null, left: null } },
  left:  { val: 5, right: null, left: null } }




// const isValidBST = (tree) => {
//   if (tree === null) {
//     return true;
//   }
//   const inOrderTraverse = (node, pre) => {
//     if (node === null) {
//       return true;
//     }
//     if (inOrderTraverse)
//     inOrderTraverse(tree.left, pre);
//     console.log(tree.val);
//     inOrderTraverse(tree.right, pre);
//   }
//   let pre = new TreeNode(null);
//   return inOrderTraverse(root, pre);
// }



const isValidBST = (root) => {
  let pre = new TreeNode(null);
  const validate = (node) => {
    if (node === null) {
      return true;
    }
    if (!validate(node.left)) {
      return false;
    }
    if (pre !== null && pre.val !== null && pre.val >= node.val) {
      return false;
    }
    pre = node;
    return validate(node.right);
  }
  return validate(root);
}


const fifteen = new TreeNode(15);
const fourteen = new TreeNode(14);
const thirteen = new TreeNode(13);
const twelve = new TreeNode(12);
const eleven = new TreeNode(11);
const ten = new TreeNode(10);
const nine = new TreeNode(9);
const eight = new TreeNode(8);
const seven = new TreeNode(7);
const six = new TreeNode(6);
const five = new TreeNode(5);
const four = new TreeNode(4);
const three = new TreeNode(3);
const two = new TreeNode(2);
const one = new TreeNode(1);

four.left = two;
two.left = one;
two.right = three;
four.right = eleven;
eleven.left = six;
six.left = five;
six.right = eight;
eight.left = seven;
eight.right = ten;
ten.left= nine;
eleven.right = thirteen;
thirteen.left = twelve;
thirteen.right = fifteen;
fifteen.left = fourteen;

// six.left = five;
// six.right = seven;
// seven.right = eight;
// eight.right = nine;


// console.log(searchBST(four, 21));
// console.log(searchBST(four, 2));
// one.left = one;
const one1 = new TreeNode(0);
const negOne = new TreeNode(-1);
one1.left = negOne;
// console.log(one1);
// console.log(two);
console.log(isValidBST(one1));
// console.log(isValidBST(four));