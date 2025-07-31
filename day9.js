//DAY 9 CHALLENGE


// ✅ Q1. Remove Duplicate Emails (Like Gmail cleanup)
// 📧 Problem:
// You're building an email cleanup feature.
//  Given a sorted list of email IDs, 
//  remove all duplicates in-place and return the list of unique emails.


emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]

function duplicateEmails(arr){
    let left = 0;
    for(i=1;i<arr.length;i++){
        if(arr[i]!=arr[left]){
            left++;
             arr[left] = arr[i];
        }
    }
     return arr.slice(0,left+1);
}
console.log(duplicateEmails(["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"])
);




//✅ Q2. Playlist Duration Matcher (Music App Feature)
// 🎵 Problem:
// You’re building a music app.
//  Users want to create a 2-song playlist that exactly matches their commute time.
// You're given an array of song durations (in minutes), and a targetDuration.
// Find one pair of songs (different songs) that exactly add up to the target.

songs = [3, 5, 8, 2, 7, 4]  
targetDuration = 10

function pair(arr, target) {
    arr.sort((a, b) => a - b); 
    left = 0;
    right = arr.length-1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            // Found valid pair
            return [arr[left],arr[right]]
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return arr; // No such pair
}
console.log(pair([3, 5, 8, 2, 7, 4] , 10));
