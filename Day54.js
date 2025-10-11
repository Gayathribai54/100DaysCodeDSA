//DSA DAY 54 CHALLENGE 



let stack = [];
let top = -1;

Max_Size = 5;

function push(element) {
    if (top == Max_Size - 1) {
        console.log("stack overflow");
    }
    else {
        top = top + 1;
        stack[top] = element;
        console.log("pushed", element);
    }
}

function pop() {
    if (top == -1) {
        console.log("stack underflow")
    }
    else {
        console.log("popped", stack[top]);
        top = top - 1;
    }
}


function peek() {
    if (top == -1) {
        console.log("stack is empty")
    }
    else {
        console.log("top element", stack[top])
    }
}

function display() {
    if (top == -1) {
        console.log("stack is empty")
    }
    else {
        console.log("stack elements:")
        for (let i = top; i >= 0; i--) {
            console.log(stack[i])
        }
    }
}


function ParenthesesChecker(str){
    let stack=[];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    for(let element of str){
        if(element==='('||element==='{'||element==='['){
            stack.push(element);
        }
        else if(element===')'||element==='}'||element===']'){
            if(stack.length===0||stack[stack.length-1]!==pairs[element]){
                return "invalid";
            }
            stack.pop();
        }
    }
    return stack.length===0 ? "valid" : "invalid";
}


console.log(ParenthesesChecker("()[]{}"));   
console.log(ParenthesesChecker("(]"));       
console.log(ParenthesesChecker("{[()]}"));   
console.log(ParenthesesChecker("{[(])}"));  