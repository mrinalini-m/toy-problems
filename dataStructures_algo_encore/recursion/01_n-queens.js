/* 
https://leetcode.com/problems/n-queens/description/
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
 */

/**
 * @param {number} n
 * @return {string[][]}
 */

const createBoard = n => {
  const board = []
  for (let i = 0; i < n; i++) {
    const elem = new Array(n).fill('.')
    board.push(elem)
  }
  return board
}
const isValidCell = (board, row, col) => {
  let rowCheckCol = col
  while (rowCheckCol >= 0) {
    if (board[row][rowCheckCol] === 'Q') return false
    rowCheckCol--
  }
  let upperDiagCheck = { col, row }
  while (upperDiagCheck['row'] >= 0 && upperDiagCheck['col'] >= 0) {
    if (board[upperDiagCheck['row']][upperDiagCheck['col']] === 'Q')
      return false
    upperDiagCheck['row']--
    upperDiagCheck['col']--
  }
  let lowerDiagCheck = { col, row }
  while (lowerDiagCheck['row'] < board.length && lowerDiagCheck['col'] >= 0) {
    if (board[lowerDiagCheck['row']][lowerDiagCheck['col']] === 'Q')
      return false
    lowerDiagCheck['row']++
    lowerDiagCheck['col']--
  }
  return true
}

var solveNQueens = function(n) {
  const board = createBoard(n)
  const placeQueen = col => {
    if (col === n) return true

    for (let i = 0; i < n; i++) {
      if (isValidCell(board, i, col)) {
        board[i][col] = 'Q'
        if (placeQueen(col + 1)) {
          return true
        }
        board[i][col] = '.'
      }
    }
  }
  placeQueen(0)
  return board
}

console.log(solveNQueens(4))
