function linearSearch(arr,val){
    let n = arr.length;
    for(let i = 0; i < n; i++){
       if(val == arr[i]){
        return i
       } 
    }
    return -1
}

let arr = [1,24,33,54,23,44,76]
console.log(linearSearch(arr,54))