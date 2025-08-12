//🚀 Day 19 - DSA Challenge

// 🧠 Problem Statement:
// You're analyzing user browsing behavior.
//  You are given a list of webpages (as strings), 
//  visited in order, and a window size k. 
//  You need to determine if any window of k consecutive pages contains 
//  all unique pages (no repeats).
// If such a window exists, return true. 
// Otherwise, return false.




// 📥 Input:
pages = ["home", "about", "products", "home", "cart", "checkout"]
k = 3


function findUnique(arr, k) {
    let freqMap = new Map();
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        // Add current element to the frequency map
        freqMap.set(arr[end], (freqMap.get(arr[end]) || 0) + 1);

        // Shrink the window if size > k
        if (end - start + 1 > k) {
            let startVal = arr[start];
            freqMap.set(startVal, freqMap.get(startVal) - 1);
            if (freqMap.get(startVal) === 0) {
                freqMap.delete(startVal);
            }
            start++;
        }

        // Check if current window has all unique elements
        if (end - start + 1 === k) {
            if (freqMap.size === k) {
                return true;
            }
        }
    }

    return false;
}

console.log(findUnique(["home", "about", "products", "home", "cart", "checkout"], 3)); // true
