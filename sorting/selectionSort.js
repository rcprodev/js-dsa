
function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i < n - 1; i++){
        let lowest = i
        for(let j = i + 1; j < n; j++){
            if(arr[lowest] > arr[j]){
                lowest = j
            }
        }
        if(lowest !== i){
            //SWAP!
            let temp = arr[i];
            arr[i] = arr[lowest]
            arr[lowest] = temp 
        }
       
    }
    return arr
}


let arr = [2,18,20,9,32,6,55]
let result = selectionSort(arr)
console.log(result)
