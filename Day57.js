class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// 🧠 Decode String using Stack objects
function decodeString(s) {
  let numStack = new Stack();
  let strStack = new Stack();
  let currentString = "";
  let currentNum = 0;

  for (let ch of s) {
    if (!isNaN(ch)) {
      // If it's a number
      currentNum = currentNum * 10 + Number(ch);
    } 
    else if (ch === "[") {
      // Push current number and string
      numStack.push(currentNum);
      strStack.push(currentString);

      // Reset
      currentNum = 0;
      currentString = "";
    } 
    else if (ch === "]") {
      // Pop and build the new string
      let repeatTimes = numStack.pop();
      let prevString = strStack.pop();
      currentString = prevString + currentString.repeat(repeatTimes);
    } 
    else {
      // Normal character
      currentString += ch;
    }
  }

  return currentString;
}


console.log(decodeString("3[a]2[bc]"));      
console.log(decodeString("3[a2[c]]"));       
console.log(decodeString("2[abc]3[cd]ef"));  
