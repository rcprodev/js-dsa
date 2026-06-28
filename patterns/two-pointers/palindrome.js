// Check if a string is a palindrome

// Pattern: two pointers

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    //character mismatch
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

/*
This solution uses the Two Pointers pattern. 
I initialize one pointer at the beginning and
another at the end of the string.
I compare the characters at both pointers. 
If they differ, I immediately return false. 
Otherwise, I move the pointers inward until they meet.
Since each character is visited at most once, 
the time complexity is O(n), 
and because only two pointer variables are used, 
the space complexity is O(1).
*/

export default isPalindrome;
