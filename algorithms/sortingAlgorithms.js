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

// QUICK SORT
function quickSort(nums) {
  // base case, array of length 0 or 1
  if (nums.length < 2) return nums;
  // choose pivot
  let pivot = nums[nums.length - 1];
  // separate into left and right arrays
  let left = [];
  let right = [];
  for (let num of nums) {
    if (num < pivot) left.push(num);
    if (num > pivot) right.push(num);
  }
  // call quickSort on left and right arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  // return left.concat(pivot, right)
  return sortedLeft.concat(pivot, sortedRight);

  // can combine these last 3 lines into one with either
  // of the following
  // return quickSort(left).concat(pivot, quickSort(right));
  // return [...quickSort(left), pivot, ...quickSort(right)];
}

/*******************************************/

// MERGE SORT
// mergeSort breaks down our input array
// into a bunch of arrays of n = 1
const mergeSort = (nums) => {
  // base case, return if length 1 or 0
  if (nums.length < 2) {
    return nums;
  }

  // break into two smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // call mergeSort on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // return one sorted array
  return results.concat(left, right);
};

/*******************************************/

export { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort };
