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

 function removeDuplicates(arr){
    return [...new Set(arr)];
 }


//using two pointer pattern
// function removeDuplicates(arr){
//     let i = 0;
// }


// const arr = [1,2,2,3,4,4]
// const result = removeDuplicates(arr)
// console.log(result) // output [1,2,3,4]



export default removeDuplicates;
