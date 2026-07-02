// Problem: find the second largest number in an array

// Pattern: Single Pass Traversal

let arr = [10, 5, 8, 20, 15];

function findSecondLargest(arr) {
  //edge case
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    // new largest found
    if (current > largest) {
      secondLargest = largest;
      largest = current;
    }
    // update second largest
    else if (current > secondLargest && current != largest) {
      secondLargest = current;
    }
  }
  // no second largest exist
  if (secondLargest === -Infinity) {
    return null;
  }

  return secondLargest;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)

*/

/*

Interview Explanation

“I used a single-pass traversal pattern.
While iterating through the array, I continuously tracked the largest and second largest values.”

*/

export default findSecondLargest;
