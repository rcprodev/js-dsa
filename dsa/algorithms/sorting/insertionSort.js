function insertionSort(arr){
    let n = arr.length
    for(let i = 1; i < n; i++){
        let currentValue = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--){
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
    }
    return arr
}

let arr = [2,1,7,54,9,6]
let result = insertionSort(arr)
console.log(result)
