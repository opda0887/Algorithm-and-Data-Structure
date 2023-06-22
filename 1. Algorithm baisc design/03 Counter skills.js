let array1 = [1, 5, 4, 9, 7, 11];
let array2 = [2, 5, 7, 6, 3, 25];

/**
 * ? Want to find the intersection of array1 & array2
 * * 1. use nested loop     -> complexity = O(n^2)
 * * 2. use counter skills  -> complexity = O(n)
 */

const answer = intersection_counter(array1, array2);
console.log(answer);

function intersection_nestedLoop(array1, array2) {
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) result.push(array1[i]);
    }
  }

  return result;
}

function intersection_counter(array1, array2) {
  let result = [];
  let counter = {};
  const combineArray = array1.concat(array2);

  for (let i = 0; i < combineArray.length; i++) {
    if (!counter[combineArray[i]])
      counter[combineArray[i]] = 1; // new number -> add in counter
    else counter[combineArray[i]]++; // same number -> its value ++
  }

  for (let property in counter) {
    if (counter[property] >= 2) result.push(property);
  }

  return result;
}
