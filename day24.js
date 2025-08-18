//✅ Day 24 Challenge: Longest Substring Without Repeating Characters

// 💼 Problem Statement:
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input:
 s = "abcabcbb"  
 

function lengthOfLongestSubstring(s){
    window=new Set();
    left=0;
    maxLength=0;
    for(let right=0;right<s.length;right++){
        while(window.has(s[right])){
           window.delete(s[left]);
            left++;
        }
        window.add(s[right]);
        maxLength=Math.max(maxLength,right-left+1);
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb"));