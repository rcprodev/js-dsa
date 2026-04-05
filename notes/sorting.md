# Sorting


### sorting algorithms

1. Bubble Sort
2. Insertion Sort
3. Selection Sort
4. Merge Sort
5. Quick Sort
6. Radix Sort


-----

1.  **Bubble Sort**

**Bubble Sort** is one of the simplest sorting algorithms. it works by repeatedly comparing adjacent elements and swapping them if they are in the wrong order.


> after each pass, the largest element "bubbles up" to the end of the array.

``` javascript

function bubbleSort(arr){
    let n = arr.length;

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

    return arr;
}

```


Key Points (Interview Tips)
- Pattern: Comparison + Swapping
- In-place: Yes (no extra memory)
- Stable: Yes
- Not efficient for large data
- Easy to implement → often asked in interviews

---

2. **Selection Sort**

**Selection Sort** works by repeatedly finding the smallest element from the unsorted part and placing it at the beginning.

> Find the minimum -> put it in the correct position.

---

3. **Insertion Sort**

**Insertion Sort** works like arranging playing cards in your hand.

>  you take one element and insert it into its correct position in the already sorted part of the array.  

---

4. **Merge Sort**
