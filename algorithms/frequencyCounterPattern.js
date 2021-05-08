// FREQUENCY COUNTER PATTERN 

/* Write a function called same, which accepts 2 arrays. The function should return true 
if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same. */

// "Naive" Algorithm - O(N^2)
function sameSquared(arr1, arr2) {
    // If the lengths of the arrays aren't equal, the conditons can't be met so we return false
    if(arr1.length !== arr2.length) {
        return false;
    }
    // Loop over each index in the first array, checking to see what the index of its value squared is in the second array
    // If the squared value isn't present in the second array, indexOf will return -1, and we will return false
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        // If the squared value is in the second array, we will splice it out so that that same value can't be repeated
        // to ensure the frequency of values is the same
        arr2.splice(correctIndex,1);
    }
    // If we make it through the loop without returning false, then the conditions are met and we return true
    return true;
}

// Refactored Algorithm - O(N)
// 2 separate loops is vastly better than 2 nested loops. O(2N) is way faster than O(N^2)
function sameSquaredRefactor(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    // We use an object to count the frequency of individual values in the arrays
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // These for ... of loops count the frequency of individual values in the arrays
    for (let val of arr1) {
        // We check to see if our array value is a key in the object
        // If it is we add 1 to it, if it isn't we initialize it to 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // console.log our objects just to see them later on
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    // For each key in the first object
    for(let key in frequencyCounter1) {
        // Is the key squared in the second object? If not, we return false
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // Do the values in the object correspond? This is how we check if the frequency is the same. 
        // If not, return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    // If we never return false then our conditions are met, so return true
    return true;
}


/********************************************************************/

// CODING CHALLENGE

// ANAGRAMS
/* Given two strings, write a function to determine if the second string 
is an anagram of the first. An anagram is a word, phrase, or name formed 
by rearranging the letters of another, such as cinema, formed from iceman. */
function validAnagram(str1, str2) {
    // If the lengths of the strings aren't the same, it won't be an anagram
    if(str1.length !== str2.length) {
        return false;
    }
    // We use an object to count the number of individual characters in the strings
    let characterCounter1 = {};
    let characterCounter2 = {};
    // Use for ... of loop on each string to count the number of each character in the string
    for (let char of str1) {
        characterCounter1[char] = (characterCounter1[char] || 0) + 1;
    }
    for (let char of str2) {
        characterCounter2[char] = (characterCounter2[char] || 0) + 1;
    }
    // console.log our objects just to see them later
    console.log(characterCounter1);
    console.log(characterCounter2);
    // For each key in the first object
    for(let key in characterCounter1) {
        // Does the key in the second object? If not, we return false
        if(!(key in characterCounter2)) {
            return false;
        }
        // Are the counts of each character the same in both objects?
        // If not, return false
        if(characterCounter2[key] !== characterCounter1[key]) {
            return false;
        }
    }
    // If it has met all of these conditions then we have an anagram, so return true
    return true;
}


export { sameSquared, sameSquaredRefactor, validAnagram };