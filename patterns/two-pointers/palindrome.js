// Check if a string is a palindrome

// Pattern: two pointers

function isPalindrome(str) {
  let left = 0;
  let right = str.lenght - 1;

  while (left < right) {
    //character mismatch
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

export default isPalindrome;
