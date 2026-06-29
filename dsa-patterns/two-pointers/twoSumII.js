// Two Sum II - Input array is sorted

/* 
problem:

Given a 1-indexed array of integers numbers that is sorted in non-decreasing order,
find two numbers such that they add up to target.

Return the indices (1-based) of the two numbers.

*/

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

/* time complexity: O(n)
   space complexity: O(1)
*/

export default twoSum;
