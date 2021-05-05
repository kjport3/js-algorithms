
// REMOVE DUPLICATES FROM A SORTED ARRAY
// Given a sorted array nums, remove the duplicates in-place such that 
// each element appears only once and returns the new length.

export function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        if (nums[i] == nums[j]) {
            nums.splice(nums[j], 1);
            i--;
        }
    }
    return [nums.length, nums];
};

export function removeDuplicatesLeet(nums) {
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
};