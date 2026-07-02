// Pattern: sliding window (fixed)

/*
Problem Statement

Given an array of integers and an integer k, find the maximum sum of any contiguous subarray of size k.
*/

function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let left = 0;
  let maxSum = -Infinity;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];
    if (right - left + 1 === k) {
      //update maxSum
      if (maxSum < windowSum) {
        maxSum = windowSum;
      }

      //remove left from window;
      windowSum -= arr[left];
      left++;
    }
  }

  return maxSum;
}

/*
Time complexity : O(n) - each element is added and removed from the window at most once
Space complexity: O(1) - only few variables are used
*/

export default maxSumSubarray;
