/* 
This is the basic coding question asked in most interviews 
*/

// Q. Remove duplicates form an array.

/*

-> check if array is sorted or not
-> case 1: sorted Array - TWO POINTER PATTERN (best pattern)
-> case 2: unsorted Array - HASHING PATTERN (HashSet / Frequency Map)

*/

// using Set

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

//using two pointer pattern

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let unique = 0;

  for (let i = 1; i < arr.length; i++) {
    // Found new unique element
    if (arr[i] !== arr[unique]) {
      unique++;

      arr[unique] = arr[i];
    }
  }

  return unique + 1;
}

let nums = [1, 1, 2, 2, 3, 4, 4];

let k = removeDuplicates(nums);

console.log(k); // 4

console.log(nums.slice(0, k));
// [1,2,3,4]

// const arr = [1,2,2,3,4,4]
// const result = removeDuplicates(arr)
// console.log(result) // output [1,2,3,4]

export default removeDuplicates;
