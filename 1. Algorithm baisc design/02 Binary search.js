let numbers = [1, 5, 9, 6, 4, 7];

/**
 * ? Want to find a number 6
 * * use Binary search -> complexity = O(logn)
 * ! must use in sorted array
 */

let n = 6;

// first - sort the array
numbers.sort();

// second - use Binary search to find the number
const position = Binary_Search(numbers, n); // the index of n
if (position + 1) console.log("Find " + n + " successfuly!");
else console.log("Cannot find " + n);

function Binary_Search(numbersArray, n) {
  let min = 0;
  let max = numbersArray.length - 1;
  while (min <= max) {
    const middle = Math.floor(min + max) / 2;
    if (numbersArray[middle] > n) min = middle + 1;
    else if (numbersArray[middle] < n) max = middle - 1;
    return middle;
  }
  return -1;
}
