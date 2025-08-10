//🚀 Day 17 - DSA Challenge




// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, 
// return the length of the longest subarray whose sum is less than or equal to k.

 Input: nums = [2, 1, 5, 1, 3, 2], k = 8  
 
function findLongSubArray(arr,k){
    let count=0;
    for(i=0;i<arr.length;i++){
         let value=0;
        for(let j=i;j<arr.length;j++){
            value+=arr[j];
            if(value<=k){
                count=Math.max(count,(j-i+1));
                
            }
        }
    }
    return count;
}
console.log(findLongSubArray([2, 1, 5, 1, 3, 2],6))