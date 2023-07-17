/**
 * ? Want to get all values in array of arrays
 * * use "Recursion" skills
 */

let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
let result = [];

function getAllValues(arr) {
  for (items of arr) {
    if (Array.isArray(items)) getAllValues(items);
    else result.push(items);
  }
}

getAllValues(arrs);

console.log(result);
//  ["a", "b", "c", "d", "e", "f", "g", "h"];
