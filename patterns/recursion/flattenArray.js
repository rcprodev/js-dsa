//Flatten a nested array

// using recursion

function flattenArray(arr) {
  let result = [];

  function flatten(item) {
    for (let i = 0; i < item.length; i++) {
      // If element is array
      if (Array.isArray(item[i])) {
        flatten(item[i]); // recursive call
      } else {
        result.push(item[i]);
      }
    }
  }

  flatten(arr);

  return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]
