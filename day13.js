//DAY 13 CHALLENGE 


// ✅ Challenge: Longest Productive Streak (Real-World Sliding Window Scenario)
// 📈 Problem Statement:
// You’re building a productivity tracker app.
//  The user’s daily productivity over the past few weeks is stored in an array:
// 1 (productive day)
// 0 (unproductive day)
// You are allowed to flip up to k unproductive (0) days into productive days.
// Your task is to find the maximum length of a productive streak possible after at most k flips.
// 📤 Expected Output:
// 7



arr = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]
k = 2

function findProductivity(arr, k) {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        let zeroCount = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] == 0) {
                zeroCount += 1;
            }
            if (zeroCount > k) break;
        currentLength = j - i + 1;
        maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
}
console.log(findProductivity([1, 0, 1, 1, 0, 0, 1, 1, 1, 0], 2))