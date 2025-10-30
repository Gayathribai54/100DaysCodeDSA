

//DAY 70 CHALLENGE DSA CHALLENGE 



function permute(strArr, left = 0) {
  if (left === strArr.length - 1) {
    console.log(strArr.join(""));
    return;
  }

  // Recursive helper to replace the loop
  function helper(i) {
    if (i === strArr.length) return; // stop when i goes out of bounds

    // Swap
    [strArr[left], strArr[i]] = [strArr[i], strArr[left]];

    // Recurse for the next position
    permute(strArr, left + 1);

    // Backtrack
    [strArr[left], strArr[i]] = [strArr[i], strArr[left]];

    // Move to next index recursively (acts like i++)
    helper(i + 1);
  }

  helper(left);
}

permute("ABC".split(""));
