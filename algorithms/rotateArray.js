// ROTATE ARRAY
// Given an array, rotate the array to the right by k steps, where k is non-negative.

export function rotateArray(nums, k) {
    let i, j, arraySlice, arrayShift;
    i = nums.length - k; 
    j = nums.length;
    arrayShift = nums.slice(0, i);
    arraySlice = nums.slice(i, j);
    arrayShift.splice.apply(arrayShift, [0, 0].concat(arraySlice));

    return arrayShift;
};

export function rotateArrayLeet(nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
};