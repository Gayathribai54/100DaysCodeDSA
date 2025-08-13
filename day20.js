//day 20 

//🚀 DSA DAY 20 Challenge 


//📥 Input:

visitors = [120, 80, 100, 90, 150, 110, 70]  
k = 3
function findMin(arr, k) {
    n=arr.length;
    if(k>n) return null;
    let windowSum=0;
    for(let i=0;i<k;i++){
        windowSum=windowSum+arr[i];
    }
    minSum=windowSum;
    for(let i=k;i<n;i++){
        windowSum=windowSum-arr[i-k];
        windowSum=windowSum+arr[i];
        if(windowSum<minSum){
            minSum=windowSum;
        }
    }
    return minSum;
}

console.log(findMin([120, 80, 100, 90, 150, 110, 70], 3));  // Output: 270
