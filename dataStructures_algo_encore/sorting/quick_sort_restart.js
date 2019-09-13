const quickSort = arr => {
  const partition = (arr, left, right) => {
    if (right <= left) return

    let p = arr[left],
      i = left + 1

    for (let j = left + 1; j < right; j++) {
      if (arr[j] < p) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
      }
    }

    arr[left] = arr[i - 1]
    arr[i - 1] = p
    return i
  }

  const quick = (arr, left, right) => {
    if (arr.length > 1) {
      const index = partition(arr, left, right)
      if (left < index - 1) {
        quick(arr, left, index - 1)
      }
      if (index < right) {
        quick(arr, index, right)
      }
    }
  }
  quick(arr, 0, arr.length)
  return arr
}
let arr = [4, 6, 1, 3, 2, 8, 7, 5]
console.log(quickSort(arr))
