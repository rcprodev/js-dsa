// Pattern: sliding window (fixed)

function firstNegativeInWindow(arr, k) {
  let result = [];
  let negativesQueue = [];
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] < 0) {
      negativesQueue.push(arr[right]);
    }

    if (right - left + 1 === k) {
      if (negativesQueue.length > 0) {
        result.push(negativesQueue[0]);
      } else {
        result.push(0);
      }

      if (arr[left] === negativesQueue[0]) {
        negativesQueue.shift();
      }

      left++;
    }
  }
  return result;
}

export default firstNegativeInWindow;
