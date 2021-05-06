// CHARACTER COUNTING FUNCTION
// Given a string, return the character count for each alphanumeric character 
function characterCount(str) {
    // Make an object to return at end
    let counts = {};
    // Loop over string, for each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // If character is not alphanumeric don't do anything
        if (char.match(/^[0-9a-z]+$/)) {
            // If the character is a number/letter AND is a key in the object, add one to count
            if (char in counts) {
                counts[char]++;
            // If the character is a number/letter AND is not a key in the object, add the key to the object and set value to 1
            } else if (!(str[i] in counts)) {
                counts[char] = 1;
            }
        }
    }
    // Return the object at the end
    return counts;
}

// CHARACTER COUNTING REFACTOR
function characterCountRefactor(str) {
    let counts = {};
    // Instead of a tradition for loop, we can use a for ... of here
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            // We can simplify/shorthand this if statement by using a short-circuit evaluation
            counts[char] = ++counts[char] || 1;
        }
    }
    // Return the object at the end
    return counts;
}
// Create a function to check if a character is alphanumer by checking its character code instead of regex, much faster
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && 
        !(code > 64 && code < 91) && 
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

export { characterCount, characterCountRefactor };