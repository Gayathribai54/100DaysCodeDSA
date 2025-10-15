
//Day 58 challenge 

class Queue{
    constructor(item){
        this.item=[];
    }
    enqueue(item){
         this.item.push(item);
    }
    dequeue(){
        if(this.isEmpty()){
            return "empty"
        }
        return this.item.shift();
    }
    isEmpty(){
        return this.item.length===0;
    }
    front(){
        if(this.isEmpty()){
            return "empty"
        }
        return this.item[0];
    }
    size(){
        return this.item.length
    }

}


let myqueue= new Queue();
myqueue.enqueue(10)
myqueue.enqueue(20)
myqueue.enqueue(30)
console.log(myqueue.dequeue())
myqueue.enqueue(40)
console.log(myqueue.front())
console.log(myqueue.size())