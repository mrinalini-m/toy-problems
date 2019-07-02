function bubbleSort(arr) {
  function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

 for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr.length-i; j++) {
      const curr = arr[j];
      const next = arr[j+1];
      if (curr>next){
        swap(j, j+1, arr);
      }
   }
 }
 return arr;
}

console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]));