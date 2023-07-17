/**
 * ? Want to calculate from 1 to a specific number
 * * use "Recursion" skills
 */

function Recursive_Sequence(number) {
  console.log(`We are in the Recursive_Sequence(${number}).`);

  if (number == 1) return 1;
  else return number + Recursive_Sequence(number - 1);
}

console.log(Recursive_Sequence(10));
