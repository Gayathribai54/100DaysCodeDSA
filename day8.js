// ✅ Q1. Count Pairs with Given Sum

// 🧮 Problem:
// You're given a sorted array of integers and a target sum.
// Find how many unique pairs exist such that the sum of the pair equals the target.

//📝 Input:

// arr = [1, 2, 3, 4, 5, 6, 7]
// target = 8

function countOfsum(arr, target) {
    left = 0;
    right = arr.length - 1;
    let count = 0;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            // Found valid pair
            count++;
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return count; // No such pair
}
console.log(countOfsum([1, 2, 3, 4, 5, 6, 7], 8));





// ✅ Q2. Move Zeroes to End

// 📦 Problem:
// You're given an array. 
// Move all 0s to the end while maintaining the order of non-zero elements.
// Do it in-place, using two pointers.

// 📝 Input:

arr = [0, 1, 0, 3, 12];

function moveZeros(arr) {
    let left = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap arr[left] and arr[i]
            [arr[left], arr[i]] = [arr[i], arr[left]];
            left++;
        }
    }
    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12])); 


