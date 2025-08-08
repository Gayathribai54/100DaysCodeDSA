// 🚀 Day 16 - DSA Challenge is LIVE!



// 🧩 Challenge: Count Occurrences of Anagrams
// Given a string txt and a pattern string pat,
// your task is to count how many times an anagram of pat appears in txt as a substring.
//Output: 3

// Anagram → a rearrangement of letters of a word.

// Example: "for" → "orf", "rfo", "fro", "ofr", "rof" are all anagrams.


Input: txt = "forxxorfxdofr";
pat = "for"
function countAnagrams(txt,pat){
    let count=0;
    let patLength=pat.length;
    let sortedPat=pat.split("").sort().join("");
    for(let i=0;i<=txt.length - patLength;i++){
        let substring=txt.substring(i, i + patLength).split("").sort().join("");
        if(substring===sortedPat){
            count++;
        }
    }
    return count;
}
console.log(countAnagrams("forxxorfxdofr","for"));