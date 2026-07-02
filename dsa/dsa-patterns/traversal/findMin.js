// problem: find minimum number in an array

let arr = [2, 33, 4, 5, 88, 71];

// pattern : Linear Traversal (or Linear Scan)

function findMin(arr) {
  if (arr.length === 0) return null;
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

console.log(findMin(arr));
