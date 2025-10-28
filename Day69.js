

//Day 69 DSA CHALLENGE 




function subString(S) {
  function helper(current, index) {
    let arr=[];
    if (index === S.length) {
      console.log(current);
      return;
    }

    // Include the current character
    helper(current + S[index], index + 1);

    // Exclude the current character
    helper(current, index + 1);
  }

  helper("", 0);
}

subString("abc");
