// 🚀 Day 15 DSA Challenge: Sliding Window
// Problem Name: "Detect Suspicious Browsing Pattern"

// 🧠 Problem Statement:
// You're analyzing user browsing behavior.
//  You are given a list of webpages (as strings), visited in order, and a window size k. 
// You need to find if any window of k consecutive pages contains all unique pages (i.e., no page is repeated).
// If such a window exists, return true. Else, return false.












// 📥 Input:

pages = ["home", "about", "products", "home", "cart", "checkout"];


function hasUniqueWindow(pages,k){
    for(let i=0;i<=pages.length-k;i++){
        let unique=[];
        for(let j=i;j<i+k;j++){
            if(unique.includes(pages[j])){
                break;
            }
            else{
                unique.push(pages[j]);
            }
        }
        if(unique.length===k){
            return true ;
        }
    }
    return false;
}

console.log(hasUniqueWindow(["home", "about", "products", "home", "cart", "checkout"],3))
