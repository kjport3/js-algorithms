// DIVIDE AND CONQUER PATTERN
/* Given a sorted array of integers, write a function 
called search, that accepts a value and returns the index 
where the value passed to the function is located. If 
the value is not found, return -1. */

// Naive approach: Linear Search - O(N)
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// Divide and Conquer Algorithm: Binary Search - O(logN)
function binarySearch(array, val) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
        
        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        } else if (array[middle] === val) {
            return middle;
        }
    }
    return -1;
}


/*****************************************************/


export { linearSearch, binarySearch };