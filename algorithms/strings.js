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

export { characterCount };