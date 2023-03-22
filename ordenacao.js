function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  function partition(arr, left, right) {
    const pivotValue = arr[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    return pivotIndex;
  }
  
 
  const arr = [3, 0, 2, 5, -1, 4, 1];
  console.log(quickSort(arr));
  