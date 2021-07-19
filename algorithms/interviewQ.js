// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// var stdin = '';
// process.stdin.on('data', function (chunk) {
//   stdin += chunk;
// }).on('end', function() {
//   var lines = stdin.trim().split('\n');
//   let score = scoreCalculator(lines[0]);
//   console.log(score);
// });

// Calculate the beauty score
const scoreCalculator = (str) => {
    // Get a count of the number of each letter we have
    let counts = characterCounter(str);
    
    // Create an array of the values in our character counter
    // & sort them in reverse order
    let charCounts = Object.values(counts);
    charCounts.sort().reverse();
    
    // Loop through the reverse sorted array of values, finding 
    // the maximum possible score by multiplying the number of 
    // occurrences of the letter by the corresponding beautyPoints 
    // value then decrementing the beautyPoints value
    let beautyPoints = 26;
    let indexScore, totalScore = 0;
    for(let i = 0; i < charCounts.length; i++) {
      indexScore = charCounts[i] * beautyPoints;
      totalScore += indexScore;
      beautyPoints--;
    }
    return totalScore;
  }
  
  // Frequency counter helper function 
  const characterCounter = (str) => {
    let counts = {};
    // Loop over string, for each character
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      // If character is not a letter don't do anything
      if(char.match(/^[a-z]+$/)) {
        // If the character is a letter and a key in the 
        // object, add one to count
        if (char in counts) {
          counts[char]++;
        // If the character is a letter and is 
        // not a key in the object, add the key to the 
        // object and set value to 1
        } else if (!(str[i] in counts)) {
          counts[char] = 1;
        }
      }
    }
    // Return frequency counter object
    return counts;
  }

  export { scoreCalculator };