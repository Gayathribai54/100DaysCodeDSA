//DSA DAY 55 CHALLENGE 


class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(element){
        if(this.isEmpty()) return null;
         return this.items.pop(element);
    }
    peek(){
        if(this.isEmpty()) return null;
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
}

class NextGreaterElement{
    constructor(arr){
        this.arr = arr;
        this.stack = new Stack();
        this.result = new Array(arr.length).fill(-1)
    }
    findGreater(){
        for(let i=0;i<this.arr.length;i++){
            while(!this.stack.isEmpty()&&this.arr[i]>this.arr[this.stack.peek()]){
                const TopIndex= this.stack.pop()
                this.result[TopIndex]=this.arr[i];
            }
            this.stack.push(i);
        }
        return this.result;
    }
    display(){
        console.log("input Array:", this.arr);
        console.log("Greater Element:",this.result);
    }
}


const example1 = new NextGreaterElement([4,5,2,25])
example1.findGreater();
example1.display();

const example2 = new NextGreaterElement([13,7,6,12])
example2.findGreater();
example2.display()

