// 🧠 DSA Day 14 Challenge


// 📥 Input:

// ▫ visitors[]: an array of integers representing visitor counts

// ▫ k: an integer (number of consecutive hours)

// 📤 Output:
// An integer representing the minimum total visitors in any k-hour window

// 🧪 Example:
Input: visitors = [120, 80, 100, 90, 150, 110, 70];
       k = 3 ;

       function findMin(arr, k) {
    let minLength = Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        let count = 0;
        for (let j = i; j < i + k; j++) {
            count += arr[j];
        }
        minLength = Math.min(minLength, count);
    }

    return minLength;
}

console.log(findMin([120, 80, 100, 90, 150, 110, 70], 3));  // Output: 270

//Output: 270