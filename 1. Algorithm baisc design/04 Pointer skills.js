let sortedNumberArray = [-11, 0, 1, 2, 3, 5, 6, 14, 21];
let Average = 1.5;

/**
 * ? Want to find the pairs that match its average is equal the "Average"
 * * 1. use nested loop -> complexity = O(n^2)
 * * 2. use Pointer skills -> complexity = O(n)
 *       |                 |
 *       V                 V
 *      -11 0 1 2 3 5 6 14 21
 *
 *   -11 + 21 avg = 5 > Average, right pointer move left 1
 *
 *       |              |
 *       V              V
 *      -11 0 1 2 3 5 6 14 21
 */

const answer = averagePairs_pointer(sortedNumberArray, Average);

console.log(answer);

function averagePairs_nestedLoop(arr, avg) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == avg * 2) result.push([arr[i], arr[j]]);
    }
  }

  return result;
}

function averagePairs_pointer(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    const tmpAvg = (arr[left] + arr[right]) / 2;

    if (tmpAvg > avg) right--;
    else if (tmpAvg < avg) left++;
    else {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    }
  }

  return result;
}
