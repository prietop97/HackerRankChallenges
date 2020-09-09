// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

function plusMinus(arr) {
  let positives = 0;
  let negative = 0;
  let zeroes = 0;
  let denominator = arr.length;
  arr.forEach((num) => {
    if (num > 0) positives++;
    if (num < 0) negative++;
    if (num === 0) zeroes++;
  });
  console.log((positives / denominator).toFixed(6));
  console.log((negative / denominator).toFixed(6));
  console.log((zeroes / denominator).toFixed(6));
}
