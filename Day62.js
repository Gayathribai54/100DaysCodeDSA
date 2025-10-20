

//day 62 challenge 

class Queue {
    constructor(k) {
        this.item = [];
        this.size = k;
    }

    enqueue(item) {
        return this.item.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
           return "empty"
        }
        return this.item.shift();
    }
    isEmpty(){
        return this.item.length===0;
    }

    reverse(){
        this.stack= [];
        
        while(!this.isEmpty()){
            this.stack.push(this.dequeue());
        }

        while(this.stack.length>0){
            this.enqueue(this.stack.pop());
        }

        return this.item;
    }



}

let value = new Queue(5);
let str ="hello";


for (let ch of str) {
    value.enqueue(ch);
}

   console.log(value.reverse().join(""));