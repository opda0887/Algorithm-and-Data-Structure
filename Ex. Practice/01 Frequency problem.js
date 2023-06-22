let string1 = "abbcdd";
let string2 = "bbcdad";

/**
 * ? Want to check two strings have the same number of each characters
 * * use Counter skills
 */

const answer = equal_Characters(string1, string2);

if (answer === "_NOTEQU_") console.log("This two strings are not equal.");
else console.log("This two strings are equal, they contain: " + answer);

function equal_Characters(string1, string2) {
  let result = "";
  let counter = {};
  const combineString = string1 + string2;

  for (let i = 0; i < combineString.length; i++) {
    if (!counter[combineString[i]]) counter[combineString[i]] = 1;
    else counter[combineString[i]]++;
  }

  let notEQU = false;

  for (let property in counter) {
    if (counter[property] % 2 == 0) result += property;
    else notEQU = true;
  }

  if (notEQU) return "_NOTEQU_";
  else return result;
}
