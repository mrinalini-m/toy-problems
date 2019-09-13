var insertionSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    const pivot = arr[i]
    for (let j = i - 1; j > -1 && arr[j] > pivot; j--) {
      console.log(i, j)
      arr[j + 1] = arr[j]
      arr[j] = pivot
    }
  }
  return arr
}

// console.log(insertionSort([5, 4, 3, 2, 1]))
console.log(insertionSort([6, 5, 3, 8, 1, 7, 2, 4]))
