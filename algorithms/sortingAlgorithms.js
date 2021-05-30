/*******************************************/

// BUBBLE SORT
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Add noSwaps variable for optimization
    let noSwaps;
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // We start off by saying noSwaps is true
      noSwaps = true;

      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // If we have a swap, we say noSwaps is false
        noSwaps = false;
      }
    }
    // If we make it through the loop without swapping
    // noSwaps will remain true, which means we're sorted
    // so we can break out of the loop
    if (noSwaps) break;
  }
  // Return the sorted array
  return arr;
}

/*******************************************/

// SELECTION SORT
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // Finding the smallest number in the subarray
    let lowestNumberIndex = i;
    let j = i + 1;
    for (j; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    // Swapping the elements
    if (lowestNumberIndex != j) {
      let temp = arr[i];
      arr[i] = arr[lowestNumberIndex];
      arr[lowestNumberIndex] = temp;
    }
  }

  // Return the sorted array
  return arr;
}

/*******************************************/

// INSERTION SORT
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  // Return the sorted array
  return arr;
}

/*******************************************/

export { bubbleSort, selectionSort, insertionSort };
