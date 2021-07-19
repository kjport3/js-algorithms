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
  arraySum,
  arraySumForEach,
  arraySumReduce
} from "./algorithms/arraysLeetCodeEasy.js";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort,
  radixSort,
} from "./algorithms/sortingAlgorithms.js";
import {
  characterCount,
  characterCountRefactor,
  naiveSearch,
  firstUniqueCharacter,
  firstUnique,
  firstUniqueChar,
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
import {
  scoreCalculator 
} from "./algorithms/interviewQ.js";

function hello() {
  return function () {
    return console.log("Hello world");
  };
}

const reverseString = (str) => {
  const res = str.split('').reverse();
  return res;
}
