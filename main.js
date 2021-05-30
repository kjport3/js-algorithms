import {
  power,
  sumRange,
  collectOddValues,
  factorial,
  productOfArray,
  fib,
  reverse,
  isPalindrome,
} from "./algorithms/recursion.js";
import {
  containsDuplicate,
  removeDuplicates,
  removeDuplicatesLeet,
  rotateArray,
  rotateArrayRefactor,
  singleNumber,
} from "./algorithms/arraysLeetCodeEasy.js";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
} from "./algorithms/sortingAlgorithms.js";
import {
  characterCount,
  characterCountRefactor,
  naiveSearch,
} from "./algorithms/strings.js";
import {
  sameSquared,
  sameSquaredRefactor,
  validAnagram,
  sameDigits,
  sameFrequency,
  areThereDuplicates,
  areThereDuplicatesOneLiner,
} from "./algorithms/frequencyCounterPattern.js";
import {
  sumZero,
  sumZeroRefactor,
  countUniqueValues,
  countUniqueValuesRefactor,
  pointersAreThereDuplicates,
  averagePair,
  isSubsequence,
} from "./algorithms/multiplePointersPattern.js";
import {
  maxSubarraySum,
  maxSubarraySumRefactor,
  minSubArrayLen,
  findLongestSubstring,
} from "./algorithms/slidingWindowsPattern.js";
import {
  linearSearch,
  binarySearch,
} from "./algorithms/divideAndConquerPattern.js";


// function arraySum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

function arraySum(numbers) {
  // account for edge case of array having only one item
  // by simply returning that value
  if (numbers.length === 1) return numbers[0];
  // constraints say we're only dealing with positive integers, so 
  // we'll initialize sum at 0
  let sum = 0;
  // loop through the numbers in the array and add each to sum
  for (let num of numbers) {
    sum += num;
  }
  // return sum
  return sum;
}

const num1 = +"100"; // converts to int data type
const num2 =  +"100.01"; // converts to float data type

console.log(typeof num1);
console.log(num1);
console.log(typeof num2);
console.log(num2);

