// MULTIPLE POINTERS PATTERN

/* Write a function called sumZero which accepts a sorted array 
of integers. The function should find the first pair where the 
sum is 0. Return an array that includes both values that sum to 
zero or undefined if a pair does not exist. */

// "Naive" Solution:
// Time complexity - O(N2)
// Space complexity - O(1)
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Refactored with multiple pointers:
function sumZeroRefactor(arr) {
    // Create a variable to reference the index 
    // at the left and right of our array
    let left = 0;
    let right = arr.length - 1;
    // Create a while loop condition that keeps 
    // going until we reach the middle
    while (left < right) {
        // Check the sum of the numers at the left 
        // and right index to see if it equals 0
        let sum = arr[left] + arr[right];
        // If they do, we return the array with those two values
        if (sum === 0) {
            return [arr[left], arr[right]];
            // If the sum is greater than 0, then our 
            // number at the right index is too high so 
            // we will decrement our right pointer and 
            // check the index to its left on the next loop
        } else if (sum > 0) {
            right--;
            // If the sum is less than 0, then our number 
            // at the left index is too low so we will we 
            // increment our left pointer and check the next 
            // index on the next loop
        } else {
            left++;
        }
    }
}



/********************************************************************/

// CODING CHALLENGE

// COUNT UNIQUE VALUES  

// Write a function which accepts a sorted array, and counts
// the unique values in the array. There can be negative numbers
// in the array, but it will always be sorted.

function countUniqueValues(arr) {
    // Set multiple pointers, this time they'll both be at the beginning
    let left = 0;
    let right = 1;
    // Add a counter variable to count the unique values
    let count = 0;
    // Until our right pointer goes all the way through the array
    while (right <= arr.length) {
        // We loop through the array, if the value is not equal, we increment
        // count by 1, set left pointer equal to the right pointer, then
        // increment the right pointer
        if (arr[left] !== arr[right]) {
            count++;
            left = right;
            right++;
            // If the values are equal, we just move the right index over
            // until we reach a set of values that are not equal
        } else {
            right++;
        }
    }
    // By only making left increment when the values are different, left skips
    // the duplicates
    return count;
}

function countUniqueValuesRefactor(arr) {
    // Add an initial check to see if the length of the array is 0 to shortcircuit
    // the function and return 0
    if (arr.length === 0) {
        return 0;
    }
    let left = 0;
    // We use a for loop and increment our right pointer in it
    for (let right = 1; right < arr.length; right++) {
        // We start looping through the array at the left side
        // If the values aren't equal, we move both pointers to the right
        // And we set the value at the left index equal to the value
        // at the right index, collecting all of our unique values
        // at the beginning of the array
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
        // If the values are equal, then our loop will continue and only
        // increment the right pointer
    }
    // Once we loop through the entire array, the right index will be at the end
    // and the left index will be at the end of the list of unique values
    // that we have collected at the beginning of the array, so we can return
    // left + 1 to get the number of unique numbers
    return left + 1;
}


/********************************************************************/


// ARE THERE DUPLICATES
/* Implement a function which accepts a variable number 
of arguments, and checks whether there are any duplicates 
among the arguments passed in. */

function pointersAreThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}


/********************************************************************/


// AVERAGE PAIR
/* Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where 
the average of the pair equals the target average. Return 
boolean, there may be more than one pair that matches the
average target. 
Constraints:
Time: O(N) */
// averagePair([1,2,3],2.5) true
// averagePair([-1,0,3,4,5,6],4.1) false
// averagePair([1,3,3,5,6,7,10,12,19,8]) true

function averagePair(arr,avg) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    if(avg < arr[leftIndex] || avg > arr[rightIndex]) return false;
    // Create a while loop condition that keeps 
    // going until we reach the middle
    while (leftIndex <= rightIndex) {
        // Check the avg of the numbers at the left and
        // right index to see if it equals our given avg
        let tempAvg = (arr[leftIndex] + arr[rightIndex]) / 2;
        // If it does, we return true
        if (tempAvg === avg) {
            return true;
            // If the avg is greater than what we want, then our 
            // value at the right index is too high so 
            // we will decrement our right pointer and 
            // check the index to its left on the next loop
        } else if (tempAvg > avg) {
            rightIndex--;
            // If the avg is less than what we want, then our value 
            // at the left index is too low so we will we 
            // increment our left pointer and check the next 
            // index on the next loop
        } else {
            leftIndex++;
        }
    }
    return false;
}

/********************************************************************/


// STRING SUBSEQUENCE
/* Write a function that takes in 2 strings and checks
whether the characters in the first string form a 
subsequence in the second string. In other words, the 
characters should appear somewhere in the second
string without their order changing */
// isSubsequence('hello', 'hello world'); true
// isSubsequence('sing', 'sting'); true
// isSubsequence('abc', 'abracadabra'); true
// isSubsequence('abc', 'acb'); false (order matters)

function isSubsequence(str1, str2) {
    if(str1.length > str2.length) return false;
    if(str1 === str2) return true; 
    let leftPointer = 0;
    let rightPointer = 1;
}



/********************************************************************/


export {
    sumZero,
    sumZeroRefactor,
    countUniqueValues,
    countUniqueValuesRefactor,
    pointersAreThereDuplicates,
    averagePair,
    isSubsequence
};