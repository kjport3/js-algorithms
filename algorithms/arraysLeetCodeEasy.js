// REMOVE DUPLICATES FROM A SORTED ARRAY
/* Given a sorted array nums, remove the duplicates in-place such that 
each element appears only once and returns the new length. */

function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        if (nums[i] == nums[j]) {
            nums.splice(nums[j], 1);
            i--;
        }
    }
    return [nums.length, nums];
}

function removeDuplicatesLeet(nums) {
    if (nums.length == 0) {
        return 0;
    } else {
        let i = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
}

/*********************************************/

// ROTATE ARRAY
/* Given an array, rotate the array to the right by k steps, 
where k is non-negative. */

function rotateArray(nums, k) {
    let i, j, arraySlice, arrayShift;
    i = nums.length - k; 
    j = nums.length;
    arrayShift = nums.slice(0, i);
    arraySlice = nums.slice(i, j);
    arrayShift.splice.apply(arrayShift, [0, 0].concat(arraySlice));

    return arrayShift;
}

function rotateArrayRefactor(nums, k) {
    for(let i = 0; i < k; i++) {
        let endIndex = nums.length - 1;
        nums.unshift(nums[endIndex]);
        nums.pop();
    }
    return nums;
}

function rotateArrayLeet(nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
}

/*********************************************/


// SINGLE NUMER IN AN ARRAY
/* Given a non-empty array of integers, every element appears twice
except one. Find that one. */

function singleNumber(arr) {
    // If the length of the array is one, then we return the only value 
    // in the array
    if(arr.length === 1) return arr[0];
    // Initialize an object that we will use to count the number of
    // each value in the array
    let valueCounter = {};
    // For each value in the array, we check to see if exists as a key
    // If it does, we add 1 to it, if it doesn't we initialize it and set it to 1
    for (let val of arr) {
        valueCounter[val] = (valueCounter[val] || 0) + 1;
    }
    // For each key in the object, we check to see if the value equals 1
    // If it does, that's our single number, so we return that key
    for(let key in valueCounter) {
        if(valueCounter[key] === 1) {
            return key;
        }
    }
}


/*********************************************/


// CONTAINS DUPLICATE
/* Given an integer array nums, return true if any value appears at 
least twice in the array, and return false if every element is unique */

function containsDuplicate(nums) {
    if(nums.length === 1) return false;
    let numCount = {};
    for (let val of nums) {
        numCount[val] = (numCount[val] || 0) + 1;
    }
    for (let key in numCount) {
        if(numCount[key] > 1) return true;
    }
    return false;
}



/*********************************************/

export { removeDuplicates, removeDuplicatesLeet, rotateArray, rotateArrayRefactor, singleNumber, containsDuplicate };
