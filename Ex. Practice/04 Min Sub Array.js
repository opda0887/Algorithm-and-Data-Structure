/**
 * ?  Given an array of positive integers nums and a positive integer target, return
 *  ?   the minimal length of a subarray whose sum is greater than or equal to target.
 *  ?   If there is no such subarray, return 0 instead.
 * ex: Input: target = 7, nums = [2,3,1,2,4,3]
        Output: 2
        Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 * * use "Pointer" & "Silding window" skills
 */

function minSubArray(array, sum) {
  let start_index = 0;
  let end_index = 0;
  let total = 0;
  let minLength = Infinity;

  while (start_index < array.length && start_index <= end_index) {
    //  total < sum -> add endValue; end_index move right for 1
    if (total < sum && end_index < array.length) {
      total += array[end_index];
      end_index++;
    }
    //  total >= sum -> set minLength; let total minus startValue; start_index move right for 1
    else if (total >= sum) {
      let temp_length = end_index - start_index;
      if (temp_length < minLength) minLength = temp_length;
      total -= array[start_index];
      start_index++;
    }
    //  end_index exceed -> end the loop
    else if (end_index >= array.length) break;
  }

  return minLength == Infinity ? 0 : minLength;
}

let example_array = [2, 3, 1, 2, 4, 3];
let example_num = 7;

console.log(minSubArray(example_array, example_num)); // 4
