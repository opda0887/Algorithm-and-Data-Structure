/**
 * ? Want to check a string is palindrome or not ("tacocat" is a palindrome string)
 * * Use "Pointer" skills
 */

function isPalindrome(str) {
  if (str.length == 1) return true;

  let right_pointer = 0;
  let left_pointer = str.length - 1;

  while (right_pointer < left_pointer) {
    if (str.charCodeAt(right_pointer) != str.charCodeAt(left_pointer))
      return false;
    else {
      right_pointer++;
      left_pointer--;
    }
  }

  return true;
}

let word1 = "Peter";
let word2 = "tacocat";
let word3 = "Lkl";
let word4 = "PetteP";

console.log(isPalindrome(word1)); // false
console.log(isPalindrome(word2)); // true
console.log(isPalindrome(word3)); // false
console.log(isPalindrome(word4)); // true
