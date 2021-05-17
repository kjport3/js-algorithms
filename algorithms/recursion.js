/* Write a function that returns the power
of the base to the exponent */
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

/********************************************************************/

/* Write a function that adds together than 
range of numbers from the input down to 1  */
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/********************************************************************/

/* Write a function that collects all the odd 
values in an array */
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

/********************************************************************/

/* Factorial */
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

/********************************************************************/

/* Write a function which takes in an 
array of numbers and returns the 
product of them all */
function productOfArray(arr) {
  if (arr.length == 0) return 1;
  console.log(arr);
  return arr[0] * productOfArray(arr.slice(1));
}

/********************************************************************/

/* Write a recursive function which 
accepts a number and returns the nth 
number in the Fibonacci sequence. */
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// 4 - fib(3) + 1
// // 3 - fib(2) + 1
// // // 2 - return 1
// // 1 + 1 = 2
// 2 + 1 = 3

/********************************************************************/

/* Write a recursive function which 
accepts a string and returns a new 
string in reverse. */
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
// reverse(hello)
// reverse(ello + h)
// // reverse(llo + eh)
// // // reverse(lo + leh)
// // // // reverse(olleh) - str.length now = 1

/********************************************************************/

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

/********************************************************************/

export {
  power,
  sumRange,
  collectOddValues,
  factorial,
  productOfArray,
  fib,
  reverse,
  isPalindrome
};
