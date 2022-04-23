/*
2:30 PM 2:41 PM
https://launchschool.com/exercises/f5d7eb65
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Problem:
you're given an input string.

Count the number of lowercase letters, uppercase letters, and characters that are neither.
- Return their amounts as percentages

The final return object should be an object with key-value pairs of the type of char as the key,
and the percentage as a value.

Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

The entire string is 10 characters long (including whitespace)
lowercase letters are 'abdef' so 5/10 is 50%
uppercase letters are 'C' so 1/10 is 10%
neither are '123' plus whitespace ' ' so 4/10 is 40%

Data Structures:
Split all strings into an array of characters.
- The values are returned with two decimal places so rounded numbers are included.

Algorithm:

1. Create a variable called charArray and initialize it to an array of all characters of the input string.

2. Create 3 variables called lowerCount, upperCount, and neitherCount and initialize them all to:
  - the length of filtered arrays that match the conditions (eg. for lowerCount - filtered array of chars length for ONLY lowercase chars)

3. Create an empty object variable called result and initialize it to {};
  - send information from the 3 arrays into the object as key value pairs where:
    - the key is the type of character, and the value is the number divided by the length of the entire string * 100, rounded to 2 decimal places.

  ** IF THERE ARE NO VALUES THAT MATCH ANY CONDITION, the key should have a value of "0.00"
4. Return the object.

*/

function lettercasePercentage(str) {
  let charsArr = str.split('');
  let lowerCount = charsArr.filter(el => el.match(/[a-z]/g));
  let upperCount = charsArr.filter(el => el.match(/[A-Z]/g));
  let neitherCount = charsArr.filter(el => !el.match(/[a-zA-Z]/g));

  let result = {};
  for (let i = 0; i < charsArr.length; i ++) {
    result['lowercase'] = ((lowerCount.length/str.length) * 100).toFixed(2);
    result['uppercase'] = ((upperCount.length/str.length) * 100).toFixed(2);
    result['neither'] = ((neitherCount.length/str.length) * 100).toFixed(2);
  }
  return result;
}
