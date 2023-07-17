/**
 * ? Want to calculate Fibonacci Sequence
 * * use "Recursion" skills
 */

function Fibonacci_Sequence(number) {
  if (number == 0) return 0;
  else if (number == 1) return 1;
  else return Fibonacci_Sequence(number - 2) + Fibonacci_Sequence(number - 1);
}

console.log(Fibonacci_Sequence(5)); // 5
console.log(Fibonacci_Sequence(6)); // 8

// 0 1 1 2 3 5 8 13 ...
