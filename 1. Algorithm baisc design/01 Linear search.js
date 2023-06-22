let numbers = [1, 5, 9, 6, 4, 7];

/**
 * ? Want to find a number = 6
 * * use Linear search -> complexity = O(n)
 */

const n = 6;
Linear_Search(numbers, n);

function Linear_Search(numbersArray, n) {
  let check = true;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] == n) {
      console.log("Find " + n + " successfuly!");
      check = false;
    }
  }
  if (check) console.log("Cannot find " + n);
}
