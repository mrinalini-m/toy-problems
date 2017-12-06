// http://www.geeksforgeeks.org/given-a-binary-tree-print-out-all-of-its-root-to-leaf-paths-one-per-line/

/*Given a binary tree, print out all of its root-to-leaf paths one per line.*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const printAll = (root) => {
  const preOrderPrint = (node, arr) => {
    //if only one branch is null, preOrderPrint will still be called but returned here.
    if (node === null) { 
      return;
    }
    arr.push(node.val);
    if (!node.left && !node.right) { //if node ends (both left and right === null), print the array, pop out the last item and return. 
      console.log(arr.join(' '));
      arr.pop();
      return;
    }
    //if node.left or node.right === null, it'll just get returned. 
    preOrderPrint(node.left, arr); 
    preOrderPrint(node.right, arr); //since there is no RETURN here, the code below WILL be executed. 
    //As recurs. stack keeps traversing up, at the end, it'll pop out the last element(current node.val)
    arr.pop(); 
  }
  preOrderPrint(root, []);
}


const eight = new TreeNode(8);
const seven = new TreeNode(7);
const six = new TreeNode(6);
const five = new TreeNode(5);
const four = new TreeNode(4);
const three = new TreeNode(3);
const two = new TreeNode(2);
const one = new TreeNode(1);

// four.left = two;
// four.right = six;
three.left = one;
three.right = six;
one.right = eight;
eight.left = four;
// two.left = one;
// two.right = three;
six.left = five;
five.left = two;
six.right = seven;

console.log(printAll(three));