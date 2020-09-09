// Function Description

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers

// INPUT 1 2 3 4 10 11
// OUTPUT 31

function simpleArraySum(ar) {
  return ar.reduce((total, current) => total + current, 0);
}
