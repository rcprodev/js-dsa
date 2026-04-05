// find factorial of n

// written as n!

// we can solve this using recursion

function factorial(n){
    if(n == 0) return 1; // base case
    return n * factorial(n - 1) // recursive call
}

// let n = 5;
// const result = factorial(n);
// console.log(result)

export default factorial;