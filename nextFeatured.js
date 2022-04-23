/* 2:00 PM 2:19 PM
https://launchschool.com/exercises/c1bfff07

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, 
with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 
97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. 
Issue an error message if there is no next featured number.

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Problem:
You're given an input integer.

You have to find the next number that matches the following conditions:
  - It is an odd number
  - It is a multiple of 7
  - The digits of the number have to be unique (occur only once).

If the number exists, return it.
If it doesn't, return the string "There is no possible number that fulfills those requirements."

Examples:
featured(20);           // 21
2 and 1 are unique digits; 21 is odd; 21 is a multiple of 7.

Data Structures:
Integers/Numbers
Arrays (to check if each digit is unique by converting to string and splitting)

Algorithm:

1. Use a helper function to check all the conditions.
  - First, check if num is a multiple of 7.
  - Check if num is also odd.
  - Check if all the digits of num only occur once within num.

2. In the main loop function,
  - use a for loop to increment the input number by 1 until you reach a featured number
    - the loop should start at (input number + 1);
    - the limit should be set at 9876543201

3. If the number exists, return it immediately.
  - if it doesn't exist, return the string "There is no possible number that fulfills those requirements."


*/

function meetsAllRequirements(num) {
  if (num % 7 !== 0 || num % 2 === 0) {
    return false;
  }
  let digitsArr = String(num).split('');
  
  if (!digitsArr.every(el => digitsArr.indexOf(el) === digitsArr.lastIndexOf(el))) {
    return false;
  }
  return true;
}

function featured(num) {
  for (let i = num + 1; i <= 9876543201; i += 1) {
    if (meetsAllRequirements(i)) {
      return i;
    }
  }
  return 'There is no possible number that fulfills those requirements.';
}
