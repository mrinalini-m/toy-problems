/*
113. Path Sum II
https://leetcode.com/problems/path-sum-ii/description/
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
*/

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// var pathSum = function(root, sum) {
//   if (root !== null && root.val === sum && root.left === null && root.right === null) {
//     return [[root.val]];
//   }
//   const initialSum = sum;
//   var inner = function(root, sum) {
//     if (root === null) {
//       return [];
//     }
//     if (root.val === sum && root.left === null && root.right === null) {
//       return [root.val];
//     }

//     let arr = [];
//     let left = inner(root.left, sum-root.val);
//     let right = inner(root.right, sum-root.val);
    
//       console.log(left, 'left, left');
//       console.log(right, 'right, right');
//     if (left.length !== 0) {
//       for (let i = 0; i < left.length; i++) {
//         let temp = [].concat(root.val, left[i]);
//         arr = [].concat(temp);
//       }
//       // arr = [root.val].concat(inner(root.left, sum-root.val));
//     }
//     if (right.length !== 0) {
//       for (let i = 0; i < right.length; i++) {
//         let temp = arr.concat(root.val, right[i]);
//         arr = arr.concat(temp);
//       }
//     }
//     // arr = arr.concat(left,right);
//     // if (initialSum === sum) {
//     //   console.log('herererererere');
//     //   console.log(left, right);
//     //   if (left.length !== 0) {
//     //     arr = arr.concat([left]);
//     //   } 
//     //   if (right.length !== 0) {
//     //     arr = arr.concat([right]);
//     //   } else {
//     //     arr = arr.concat(right);
//     //   }
//     // } else {
//     //   arr = left.concat(right);
//     // }

//     return [].concat(arr);
//   }
//   return inner(root, sum);
// };
    // arr = (initialSum === sum) 
      // ? [].concat([left], [right]) 
      // : left.concat(right);

var pathSum = function(root, sum) {
    var res;
        
    if(root===null)return [];
    if(sum===root.val&&root.left===null&&root.right===null)return [[root.val]];

    res=pathSum(root.left,sum-root.val).concat(pathSum(root.right,sum-root.val));
    res.map(arr=>arr.unshift(root.val));
    return res;
};

var pathSum = function(root, sum) {
  let left,
      right,
      i;
  
  if(root === null) {
    return []; 
  }
  if(sum===root.val&&root.left===null&&root.right===null)return [[root.val]];
  
  left=pathSum(root.left,sum-root.val);
  right=pathSum(root.right,sum-root.val);
  console.log('left', left);
  console.log('right', right);
  for(i=0;i<left.length;i++){
    left[i].unshift(root.val);
  }
  for(i=0;i<right.length;i++){
      right[i].unshift(root.val);
  }
  return left.concat(right);
};

var thirteen = new TreeNode(13);
var eleven = new TreeNode(11);
var eight = new TreeNode(8);
var seven = new TreeNode(7);
var five = new TreeNode(5);
var four = new TreeNode(4);
var two = new TreeNode(2);
var two1 = new TreeNode(2);
var one = new TreeNode(1);
var one1 = new TreeNode(1);
var one2 = new TreeNode(1);
var five1 = new TreeNode(5);
var four1 = new TreeNode(4);
var zero = new TreeNode(0);
five.left = four;
five.right = eight;
four.left = eleven;
eight.left = thirteen;
eight.right = four1;
eleven.left = seven;
eleven.right = two;
four1.left = five1;
four1.right = one;

// console.log(pathSum3(five, 22));


// console.log('---------------');
// console.log(pathSum(five, 22));
// four1.right = new TreeNode(5);
var nTwo = new TreeNode(-2);
var fourfour = new TreeNode(4);
eleven.left = nTwo;
nTwo.right = fourfour;

console.log('---------------');
console.log(pathSum(five, 22));
console.log('---------------');
two.left = one;
console.log(pathSum(one, 1), [[1]]); //[[1]]
console.log('---------------');
console.log(pathSum(one, 0), []);// []
console.log('---------------');
one.left = new TreeNode(2);
console.log(pathSum(one, 1),[]);// []
console.log('---------------');
zero.right = one1;
zero.left = one2;
console.log(pathSum(zero, 1), [[0,1],[0,1]]);// [[0,1],[0,1]]
console.log('---------------');


//[1,0,1,1,2,0,-1,0,1,-1,0,-1,0,1,0]
var one = new TreeNode(1);
var one1 = new TreeNode(1);
var one2 = new TreeNode(1);
var one3 = new TreeNode(1);
var one4 = new TreeNode(1);
var nOne4 = new TreeNode(-1);
var zero = new TreeNode(0);
var zero1 = new TreeNode(0);
var zero2 = new TreeNode(0);
var zero3 = new TreeNode(0);
var zero4 = new TreeNode(0);
var zero5 = new TreeNode(0);
var nOne = new TreeNode(-1);
var nOne1 = new TreeNode(-1);
var nOne2 = new TreeNode(-1);
var two = new TreeNode(2);
one.left = zero;
one.right = one1;
zero.left = one2;
zero.right = two;
one2.left = zero1;
one2.right = one3;
two.left = nOne;
two.right = zero2;
one1.left = zero3;
one1.right = nOne1;
zero3.left = nOne2;
zero3.right = zero4;
nOne1.left = one4;
nOne1.right = zero5;
// .left = ;
// .right = ;
// .left = ;
// .right = ;
// .left = ;
// .right = ;
// console.log(pathSum(one, 2));// [[0,1],[0,1]]
// console.log([[1,0,1,0],[1,0,2,-1],[1,1,0,0],[1,1,-1,1]]);
console.log('---------------');