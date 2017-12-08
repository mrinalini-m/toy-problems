/*
https://leetcode.com/problems/path-sum-iii/description/
437. Path Sum III
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

*/
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
//my solution. Doesn't work - counts (single nodes === sum)multiple times. 
var pathSum1 = function(root, sum) {  
  let count = 0;
  const hasPathSum = (node, innerSum) => {
    if (node === null) {
      return;
    }
    const total = innerSum - node.val;
    if (innerSum  === node.val) {
      count++;
      return;
    }
    hasPathSum(node.left, total);
    hasPathSum(node.right, total); 
    hasPathSum(node.left, sum);
    hasPathSum(node.right, sum);
  };
  hasPathSum(root, sum);
  return count;
};

//https://discuss.leetcode.com/topic/64461/simple-java-dfs
var pathSum2 = function(root, sum) {  
  const pathSumCount = (root, sum) => {
    if (root === null) {
      return 0;
    }  
    return pathSumFrom(root, sum) + pathSumCount(root.left, sum) +pathSumCount(root.right, sum);
  }
  const pathSumFrom = (node, sum) => {
    if (node === null) {
      return 0;
    }
    const count = (sum === node.val ? 1 : 0);
    return count + pathSumFrom(node.left, sum - node.val) + pathSumFrom(node.right, sum - node.val); 
  };
  return pathSumCount(root, sum);
};

// https://discuss.leetcode.com/topic/87465/concise-javascript-o-n-solution-using-map
// prefix
var pathSum3 = function(root, sum, presums = { '0': 1 }, prev = 0) {
  if (!root) return 0;
  let curr = prev + root.val;
  presums[curr] = (presums[curr] || 0) + 1;
  console.log(presums);
  console.log(presums[curr - sum], 'curr:', curr, 'root.val:', root.val, curr - sum); 
  let res = (presums[curr - sum] || 0) - !sum; //!sum to account for if given sum is 0, someNum - !0 = someNum - 1 (js type conversion)
  res += pathSum3(root.left, sum, presums, curr) + pathSum3(root.right, sum, presums, curr);
  presums[curr]--;
  return res;
};

//julian's path sum, prints out array of path each time a path is found. doesn't work same issue as my solution
function pathSum4(root, val, arr) {
  if (root === null) return;
  // console.log(arr)
  var newVal = null;
  if (!val) {
    newVal = root.val;
  } else {
    newVal = root.val + val;
  }
  var newArr = arr.concat([root.val]);
  if (newVal === sum) {
    console.log(newArr, "found result", sum);
  }

  pathSum4(root.left, newVal, newArr);
  pathSum4(root.right, newVal, newArr);
  // console.log(newVal, newArr[0]);
  newVal = newVal - newArr[0];
  var newArrWithoutPrev = newArr.slice(1);  
  pathSum4(root.left, newVal, newArrWithoutPrev);
  pathSum4(root.right, newVal, newArrWithoutPrev);

}


const eleven = new TreeNode(11);
const ten = new TreeNode(10);
const five = new TreeNode(5);
const four = new TreeNode(4);
const three = new TreeNode(3);
const two = new TreeNode(2);
const two1 = new TreeNode(2);
const one = new TreeNode(1);
const one1 = new TreeNode(1);
const nOne = new TreeNode(-1);
const nOne1 = new TreeNode(-1);
const nTwo = new TreeNode(-2);
const nTwo1 = new TreeNode(-2);
const nThree = new TreeNode(-3);
const three1 = new TreeNode(3);
// one.right = two;
// two.right = nOne;
// nOne.right = nOne1;
// nOne1.right = two1;
// console.log(pathSum(one, 2)); //4

// ten.left = five;
// ten.right = nThree;
// five.left = three;
// five.right = two;
// nThree.right = eleven;
// three.left = three1;
// three.right = nTwo;
// two.right = one;
// console.log(pathSum1(ten, 8)); //3

// one.right = two;
// two.right = three;
// three.right = four;
// four.right = five;
// console.log(pathSum1(one, 3)); //2

one.left = nTwo;
one.right = nThree;
nTwo.left = one1;
nTwo.right = three;
one1.left = nOne;
nThree.left = nTwo1;
// console.log(pathSum1(one, 3)); //1
// console.log(pathSum2(one, 3)); //1
// console.log(pathSum3(one, 3)); //1

// var sum = 3;
// pathSum4(one, null, []);


