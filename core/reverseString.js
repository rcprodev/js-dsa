

// reverse string

/* function reverseString(str){
    let reversed = str.split('').reverse().join('')
    return reversed;
} */



// Pattern : Two Pointer Pattern (sReverse Traversal variant)

/*
 we use only one loop (or) traverse the string once.

 we are using an index starting from the end of the string
 then traversing towards the beggining.
 this is a vaiation of the two pointer technique

 more specifiacally
 -> reverse iteration / backward traversal

*/


// reverse string (without built-in reverse)


/* function reverseString(str){
    // This is a reverse traversal approach, a variation of the two pointer pattern
    let reversed = "";
    let end = str.length - 1
    
    for(let i = end; i >= 0 ; i--){
        reversed  +=  str[i]
    }

    return reversed;
} */

/*
Time complexity : O(n), since we traverse the string once
Space complexity : O(n), since we create a new string
*/


// reverse string - two pointer -- in-place style
function reverseString(str){
    let arr = str.split(''); // convert string to array
    let left = 0;
    let right = arr.length - 1;
   
    while(left < right){
        //swap
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp 
       
        left++;
        right--;
    }

    return arr.join('');
}

/* optimal time complexity is O(n)
since strings are immutable in javascript, we use a two-pointer approach on an array for better performance than repeated concatenation
 
In Javascript you cannot truly do O(1) space for string reverse (because strings are immutabel)
*/






/* 
const str = "hello";
const result = reverseString(str)
console.log(result) */


export default reverseString;


