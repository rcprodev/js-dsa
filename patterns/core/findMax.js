// Find the Maximum number in an array.

//  using Math.max

/* function findMax(arr){
    return Math.max(...arr)
} */


// using reduce

function findMax(arr){

     if(arr.length === 0) return null;

    return arr.reduce((max, current) => {
        return current > max ? current : max;
    })
}






// pattern : Linear Traversal (or Linear Scan)


function findMax(arr){

    if(arr.length === 0) return null;
 
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }

    return max;
}



/* 

Time complexity: O(n)
Space complexity: loop -> O(1) 
                  spread/reduce -> O(n) internally

*/

/* let arr = [1,2,33,4,55]
const result = findMax(arr)
console.log(result); */


export default findMax;

