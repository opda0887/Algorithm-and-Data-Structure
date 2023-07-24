/**
 * ? sort a number array in ascending
 * * use Bubble sort -> worst case: O(n^2)
 *  *                -> best case : O(n)
 *  *                -> average case: O(n^2)
 */

function BubbleSort(numArray) {
  let resultArray = numArray;

  for (let i = 0; i < resultArray.length - 1; i++) {
    for (let j = resultArray.length - 1; j > i; j--) {
      if (resultArray[j - 1] > resultArray[j]) {
        // swap two values
        let tempNum = resultArray[j];
        resultArray[j] = resultArray[j - 1];
        resultArray[j - 1] = tempNum;
      }
    }
  }

  console.log(resultArray);
  return resultArray;
}

let numArray = [4, 6, 8, 2, 1, 5, 9, 7];
BubbleSort(numArray); // [1, 2, 4, 5, 6, 7, 8, 9]
