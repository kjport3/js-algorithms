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
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      let match = short.length - 1;
      if (long[i + j] != short[j]) break;
      if (j === match) count++;
    }
  }
  return count;
};

// FIRST UNIQUE CHARACTER FUNCTION
// Given a string, return the first unique character
function firstUniqueCharacter(str) {
  if (str.length === 1) return str.toLowerCase();
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
  // If the number of keys in the object equals the string length, we only have unique characters, return the first character
  if (Object.keys(counts).length === str.length) return str[0];
  // Find the first letter in the object that occurs only once and return it
  for (const letter in counts) {
    if (counts[letter] === 1) {
      return letter;
    }
  }
  // Return message
  return "There are no unique values in this string";
}

const firstUnique = (str) => {
  const chars = str.toLowerCase().split('');
  console.log(chars);
  for (char in chars) {

  }
};

const firstUniqueChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      return i
    }
  }
 return -1
}

export {
  characterCount,
  characterCountRefactor,
  naiveSearch,
  firstUniqueCharacter,
  firstUnique,
  firstUniqueChar
};
