// SLIDING WINDOWS PATTERN

/* Write a function called maxSubarraySum which accepts an 
array of integers and a number called **n**. The function 
should calculate the maximum sum of **n** consecutive 
elements in the array. */

// "Naive" Solution: Time complexity - O(N2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Sliding Windows Refactor: Time complexity - O(N)
function maxSubarraySumRefactor(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

/********************************************************************/

// MINIMUM SUBARRAY LENGTH
/* Write a function which accepts 2 parameters, an array
of positive integers and a positive integer. The function
should return the minimal length of a contiguous subarray 
of which the sum is greater than or equal to the integer
passed to the function. If there isn't one, return 0. */

/* So what I want to do is add up a section of the array 
until I reach a sum that is greater than num, save the number
of values in that subarray, then move the index that I'm starting
the loop in one over */

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

/********************************************************************/

// LONGEST DISTINCT SUBSTRING
/* Write a function which accepts a string and 
returns the length of the longest substring with 
all distinct characters. */

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

/********************************************************************/

export {
  maxSubarraySum,
  maxSubarraySumRefactor,
  minSubArrayLen,
  findLongestSubstring,
};
