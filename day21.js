//🚀 Day 21 – DSA Challenge is LIVE! 

// ✅ Challenge: Longest Productive Streak

// 📈 Problem Statement:
// You’re building a productivity tracker. The user has a record of their daily productivity over the past few weeks. Each day is marked as:

// 1 → productive

// 0 → unproductive

// You’re allowed to take a break for up to k unproductive days, and you want to find the maximum streak of days that can be considered productive by flipping up to k zeros.


//📥 Input Example:

days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]  
k = 2


function findProductivity(days, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (let right = 0; right < days.length; right++) {
        if (days[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (days[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


console.log(findProductivity(days, k)); // ✅ Output: 7


