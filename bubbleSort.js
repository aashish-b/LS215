// https://launchschool.com/exercises/3a1e6ee4

/* 11:39 12:04

key info:  On each pass, the two values of each pair of consecutive elements are compared. 
If the first value is greater than the second, the two elements are swapped. 
This process is repeated until a complete pass is made without performing any swaps — 
at which point the array is completely sorted.We can stop iterating the first time we make a pass through 
the array without making any swaps because this means that the entire array is sorted.


Problem:
- Input: You're given an array of elements (examples show numbers or strings). 
 * assuming that input arrays contain elements that can all be successfully compared with each other.
- Output: A fully bubbles-sorted array so that the end state reflects an array where no more swaps can be made.

Examples/Test Cases:

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

- Taking the 2nd array as the example to focus on during PEDAC:
const array2 = [6, 2, 7, 1, 4]; // [1, 2, 4, 6, 7]

[6, 2, 7, 1, 4] should become [2, 6, 7, 1, 4] after the first loop.
[2, 6, 7, 1, 4] should become [2, 6, 1, 7, 4] after the second loop.
[2, 6, 1, 7, 4] should become [2, 1, 6, 7, 4] after the third loop.
[2, 1, 6, 7, 4] should become [1, 2, 6, 7, 4] after the fourth loop.
[1, 2, 6, 7, 4] should become [1, 2, 6, 4, 7] after the fifth loop.
[1, 2, 6, 4, 7] should become [1, 2, 4, 6, 7] after the sixth loop. // no swaps at this point.

Data Structures/Considerations:
- You need to loop over the input array several times.
  - Input array can contain numbers, or strings. 
- You need to keep track of swaps at every loop. 
  - If the swap is 1, loop again.
  - If the swap is 0, return the array.
**SORTING MUST BE DONE IN-PLACE; MUTATE THE GIVEN ARRAY, DO NOT CREATE A NEW ONE.

Algorithm:
1. Create a variable called swaps to keep track of switched elements.
  Since we have to keep track of 'swaps' and that variable determines when the loop should stop,
  use a while loop with a condition of swaps being at 0, as the sign to exit the loop.
  - All the relevant variables need to be created INSIDE this loop because different elements
  are going to be compared at each iteration.

2. INSIDE EACH LOOP:
  - If the current element of the iteration is greater than the one next to it, they 
  have to be swapped. The swap variable should be incremented once this happens.
  - If we need to compare each element with the one next to it, we can use a for loop
  to ensure that we're going through the entire array. 
  Using the example, [6, 2, 7, 1, 4]
  Once we see that 6 is > 2, they need to be swapped.

3. To swap elements, we can use index position (Square bracket) notation to manually
switch elements that are next to each other, since their indexes are reliably going to differ by a value of 1.
- Create a new variable called 'greaterElement' and store the current element inside it if it is greater than the element next to it.

Then, set the current index positions value to the same value as the element at the next index.
Finally, set the value of the element at the next index to the one inside greaterElement.
Now, the two values will be swapped. REMEMBER TO INCREMENT THE SWAP VARIABLE.

4. Once there are no more swaps, the function will return the array mutated in-place if the while loop works as intended.


*/

function bubbleSort(arr) {
  let swaps;
  while (swaps !== 0) {
    swaps = 0;

    for (let i = 0; i < arr.length; i ++) {
      if (arr[i] > arr[i + 1]) {
        let greaterElement = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = greaterElement;
        swaps += 1;
      }
    }
  }
  return arr;
}








