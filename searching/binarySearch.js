function binarySearch(arr,ele){
   let start = 0
   let end = arr.length - 1
   let middle = Math.floor((start + end) / 2) 

   while(arr[middle] !== ele && start <= end){
    if(ele > arr[middle]) start = middle + 1
    else end = middle - 1
    middle = Math.floor((start + end) / 2) 
   }
    
  return arr[middle] === ele ? middle : -1

}


let arr = [1,2,4,6,22,23,28,34,54,68,77]
let result = binarySearch(arr, 28)
console.log(result); //6

