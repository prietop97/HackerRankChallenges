// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference

function diagonalDifference(arr) {
  let i = 0;
  let j = arr.length - 1;
  let one = 0;
  let two = 0;
  while (i <= arr.length && j >= 0) {
    one += arr[i][i];
    two += arr[i][j];
    i++;
    j--;
  }
  return Math.abs(one - two);
}
