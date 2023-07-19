/**
 * ? Write two functions to find the max & min sum of n consecutive numbers in array
 *   ex: 1 2 3 5 6 , n=3 -> max = 3+5+6 = 14
 *   ex: -5 2 6 -4 , n=2 -> min = -5+2 = -3
 * * use "Silding window"
 *    [1, 2, 3]
 *       [2, 3, 5]
 *          [3, 5, 6]
 */

function findMaxInN(array, size) {
  let max = -Infinity;
  for (let i = 0; i <= array.length - size; i++) {
    let sum = 0;
    for (let j = 0; j < size; j++) sum += array[i + j];
    // set the max sum
    if (sum > max) max = sum;
  }
  return max;
}

function findMinInN(array, size) {
  let min = Infinity;
  for (let i = 0; i <= array.length - size; i++) {
    let sum = 0;
    for (let j = 0; j < size; j++) sum += array[i + j];
    // set the min sum
    if (sum < min) min = sum;
  }
  return min;
}

function IMPROVE_findMaxInN(array, size) {
  // [1,2,3] = 6; [2,3,5] = [1,2,3]+5-1 = 10
  let max = 0;
  for (let i = 0; i < size; i++) max += array[i];
  let temp_sum = max;
  for (let j = size; j < array.length; j++) {
    temp_sum = temp_sum + array[j] - array[j - size];
    if (temp_sum > max) max = temp_sum;
  }
  return max;
}

const example_array = [1, 5, 3, 9, -7, 5, 1, 3, -4, 5];

console.log(findMaxInN(example_array, 3));
console.log(findMinInN(example_array, 3));

console.log(IMPROVE_findMaxInN(example_array, 3));
