//DAY 11 CHALLENGE 

// 🔥 Challenge: Find All Unique Triplets That Sum to Zero
// Problem Statement:
// You’re building a feature for a finance dashboard that analyzes daily profit/loss patterns.
//  You're given an array of integers representing daily net changes.
// Your task is to find all unique triplets (i, j, k) such that:
// arr[i] + arr[j] + arr[k] == 0  and i != j != k


arr = [-1, 0, 1, 2, -1, -4]

function sumOfZero(arr, target) {
    arr.sort((a, b) => a - b); // Sort the array first
    const result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicate i

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum === target) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;

                // Skip duplicate values at left and right
                while (left < right && arr[left] === arr[left - 1]) left++;
                while (left < right && arr[right] === arr[right + 1]) right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
console.log(sumOfZero([-1, 0, 1, 2, -1, -4], 0));