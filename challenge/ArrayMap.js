function ArrayMap(arr, target) {
    // Map object to store cumulative sums and their corresponding indices
    const map = new Map();
    let sum = 0;
      // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        // If the cumulative sum is equal to the target, return true
        if (sum === target) {
            return true; 
        }
        if (map.has(sum - target)) {
            return true; 
        }
        map.set(sum, i);
    }

    // If no subarray with the target sum is found, return false
    return false; 
}

const arr = [4, 2, 7, 1, 8, 5];
const target = 17;
console.log(ArrayMap(arr, target)); 
