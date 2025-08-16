
//Day 22 



// 🚀Day 22 DSA Challenge 

// 🇮🇳 Problem: Find the Indian Flag in the Parade

// Scenario:
// During an Independence Day parade, different colored flags are being waved one after another.
// You are given an array colors[], where each element is a string representing the color of a flag in order.

// Your task is to find the shortest continuous segment in colors that contains at least one "orange",
//  one "white", and one "green" the three colors of the Indian flag.

// If no such segment exists, return -1.

//Input: 
//colors = ["blue", "orange", "white","blue", "green", "orange"]


function shortestIndianFlagSegment(colors) {
    let minLength = Infinity;
    let left = 0;
    let orangeCount = 0, whiteCount = 0, greenCount = 0;

    for (let right = 0; right < colors.length; right++) {
        // Add current color to counts
        if (colors[right] === "orange") orangeCount++;
        if (colors[right] === "white") whiteCount++;
        if (colors[right] === "green") greenCount++;

        // When window has all 3 colors
        while (orangeCount >= 1 && whiteCount >= 1 && greenCount >= 1) {
            minLength = Math.min(minLength, right - left + 1);

            // Shrink window from left
            if (colors[left] === "orange") orangeCount--;
            if (colors[left] === "white") whiteCount--;
            if (colors[left] === "green") greenCount--;

            left++;
        }
    }

    return minLength === Infinity ? -1 : minLength;
}


 console.log(shortestIndianFlagSegment(["blue", "orange", "white", "green","blue", "orange"]));