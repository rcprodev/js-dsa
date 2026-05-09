// Problem:  Move all zeros to the end
// Pattern: Two Pointers

function moveZeros(arr) {
  let nonZero = 0;

  // Traverse array
  for (let i = 0; i < arr.length; i++) {
    // if current ele is not zero
    if (arr[i] !== 0) {
      //swap!
      let temp = arr[i];
      arr[i] = arr[nonZero];
      arr[nonZero] = temp;

      nonZero++;
    }
  }

  return arr;
}

/*
 Time Complexity: O(n)
 Space Complexity: O(1)
*/

// let arr = [0, 3, 0, 2, 14, 5];

// console.log(moveZeros(arr));

export default moveZeros;
