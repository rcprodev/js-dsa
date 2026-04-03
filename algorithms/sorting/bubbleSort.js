function bubbleSort(arr){
    let n = arr.length
    for(let i = 0; i < n - 1; i++){
        let swapped = false
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                //SWAP
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return arr
}

let arr = [2,44,12,23,11,7]
const result = bubbleSort(arr)
console.log(result)