//DAY 10 DSA CHALLENGE 


//Problem Statement:
// You're building a calendar integration tool.
// Two people share their schedules in the form of sorted busy time intervals (start and end times). 
// You need to merge both their busy slots into a single calendar 
// and combine any overlapping or touching intervals.

userA = [[9, 11], [13, 15], [18, 20]]  
userB = [[10, 12], [14, 16], [17, 18]]



function mergingTime(arr1, arr2) {
    let merged = [...arr1, ...arr2]; // i used spread operator to combine
    merged.sort((a, b) => a[0] - b[0]); // Sorted new array

    let mergedResult = [];
    
    // Start with the first interval
    let lastMerged = merged[0];

    merged.forEach(current => {
        if (current[0] <= lastMerged[1]) {
            // Merge the intervals by updating the end
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // Push the last merged and move to the next
            mergedResult.push(lastMerged);
            lastMerged = current;
        }
    });

    // Push the final interval
    mergedResult.push(lastMerged);

    return mergedResult;
}
console.log(mergingTime([[9, 11], [13, 15], [18, 20]],[[10, 12], [14, 16], [17, 18]]));