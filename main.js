import { containsDuplicate, removeDuplicates, removeDuplicatesLeet, rotateArray, rotateArrayRefactor, singleNumber } from './algorithms/arraysLeetCodeEasy.js';
import { bubbleSort, selectionSort, insertionSort } from './algorithms/sortingAlgorithms.js';
import { characterCount, characterCountRefactor } from './algorithms/strings.js';
import { sameSquared, sameSquaredRefactor, validAnagram } from './algorithms/frequencyCounterPattern.js';
import { sumZero, sumZeroRefactor, countUniqueValues, countUniqueValuesRefactor } from './algorithms/multiplePointersPattern.js';


// let array = [1,2,3,1];
// let array = [1,2,3,4];
let array = [1,2,3,4,5,6,7];
console.log(rotateArray(array, 3));
array = [1,2,3,4,5,6,7];
console.log(rotateArrayRefactor(array, 3));
