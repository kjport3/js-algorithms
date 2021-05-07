import { removeDuplicates, removeDuplicatesLeet } from './algorithms/removeDuplicates.js';
import { rotateArray, rotateArrayLeet } from './algorithms/rotateArray.js';
import { bubbleSort, selectionSort, insertionSort } from './algorithms/sortingAlgorithms.js';
import { characterCount, characterCountRefactor } from './algorithms/strings.js';
import { same, sameRefactored, validAnagram } from './algorithms/frequencyCounterPattern.js';


let array1 = [1,2,3,2,5];
let array2 = [1,4,9,4,25];
// console.log(sameRefactored(array1, array2));

let string1 = 'iceman';
let string2 = 'cinema';
console.log(validAnagram(string1, string2));
