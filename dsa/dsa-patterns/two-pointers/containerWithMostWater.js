/*
Problem:

You are given an array height[].

Each element represents the height of a vertical line.

Find two lines that together with the x-axis 
form a container that can hold the maximum amount of water.
[1, 8, 6, 2, 5, 4, 8, 3, 7];
*/

/*
step-by-step algorithm


1. Initialize two pointers:
      left at the beginning.
      right at the end.

2. Calculate:
      width = right - left
      height = minimum(leftHeight, rightHeight)
      area = width × height

3. Update the maximum area if the current area is larger.

4. Move the pointer with the smaller height:
      If left height is smaller, move left forward.
      Otherwise, move right backward.

5. Repeat until both pointers meet.

6. Return the maximum area found.

*/

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;

  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;

    if (area > maxWater) {
      maxWater = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

/*
Time Complexity : O(n) - each pointer moves at most n times
Space Complexity: O(1) - only few variables used;
*/

export default maxArea;
