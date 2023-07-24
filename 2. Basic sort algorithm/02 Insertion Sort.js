/**
 * ? sort a number array in ascending
 * * use Insertion sort -> worst case: O(n^2)
 *  *                   -> best case : O(n)
 *  *                   -> average case: O(n^2)
 */

function InsertionSort(numArray) {
  let resultArray = numArray;

  for (let i = 1; i <= resultArray.length - 1; i++) {
    let key = resultArray[i];
    // Now, insert key into the sorted squence A[0, 1, 2, ..., i-1]
    let j = i - 1;
    while (j >= 0 && resultArray[j] > key) {
      resultArray[j + 1] = resultArray[j];
      j--;
    }
    resultArray[j + 1] = key; // the key's new position
  }

  console.log(resultArray);
  return resultArray;
}

let example_array = [5, 6, 3, 4, 8, 1, 2, 0, 9, 8, 3];
InsertionSort(example_array);
// [0, 1, 2, 3, 3, 4, 5, 6, 8, 8, 9]
