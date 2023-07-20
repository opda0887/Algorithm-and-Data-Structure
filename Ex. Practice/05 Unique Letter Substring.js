/**
 * ? Given a string str consisting of lowercase alphabets, the task is to find the
 *   ? length of the longest substring with all distinct characters
 * ex: uniqueLetterString("thisishowwedoit") = 6
 *  because "wedoit"
 * * use "Silding window"
 */

function uniqueLetterString(str) {
  let container = [];
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    // unique char -> push into the container
    if (!container.includes(str[i])) container.push(str[i]);
    // repeated char -> set maxLength; pop container until not include the old repeated char; push the new (repeated) char
    else {
      if (maxLength < container.length) maxLength = container.length;
      do {
        container.pop();
      } while (container.includes(str[i]));
      container.push(str[i]);
    }
  }
  return maxLength;
}

let string1 = "thisishowwedoit";
let string2 = "aaaaaaaaaaaaaaa";
console.log(uniqueLetterString(string1)); // 6
console.log(uniqueLetterString(string2)); // 1
