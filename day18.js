//DAY 18 
//🚀 Day 18 - DSA Challenge


// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, 
// return the length of the longest subarray whose sum is less than or equal to k.



function slidingWindow(nums,k){
    let maxSum=0;
    let windowSum=0;
    let maxLength=0;
    for(let i=0;i<nums.length;i++){
        windowSum+=nums[i];
        while(windowSum>k){
            windowSum-=nums[maxSum];
            maxSum+=1;
            currentLength=i-maxSum+1;
            if(currentLength>maxLength){
                maxLength=currentLength
            }
        }
    }
    return maxLength;
}
console.log(slidingWindow([4, 2, 1, 7, 8, 1, 2, 8, 1],8))