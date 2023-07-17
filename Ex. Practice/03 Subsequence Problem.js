/**
 * ? Want to check A_string is a subsequence string of B_string
 *    A_string="hello", B_string="helklo, IS" -> subsequence
 *    A_string="abc", B_string="cba" -> not subsequence
 * * use "Pointer" skills
 */

function isSubsequence(a, b) {
  // let "bString" be the higher length string
  let aString = a;
  let bString = b;
  if (aString.length > bString.length) {
    aString = b;
    bString = a;
  }

  if (aString.length == 0) return true;

  let a_pointer = 0;
  let b_pointer = 0;

  while (a_pointer < aString.length && b_pointer < bString.length) {
    if (aString.charCodeAt(a_pointer) == bString.charCodeAt(b_pointer)) {
      a_pointer++;
      b_pointer++;
      continue;
    }
    b_pointer++;
  }

  if (a_pointer == aString.length) return true;
  else return false;
}

let A1 = "hello";
let B1 = "helKlo, IS";
let A2 = "abc";
let B2 = "cba";
let A3 = "Lapus is cool";
let B3 = "Laisco";

console.log(isSubsequence(A1, B1));
console.log(isSubsequence(A2, B2));
console.log(isSubsequence(A3, B3));
