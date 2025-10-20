

//DAY 61 CHALLENGE 
//circular queue

class Queue{
     constructor(k){
        this.item=[];
        this.size=k;
        this.count = 0;
     }
     enqueue(item){
        if(this.isFull()) return false;
        this.item.push(item);
        this.count++;
        return true;
     }
     dequeue(){
        if(this.isEmpty()) return "empty";
        this.count--;
        return this.item.shift();

     }
     isEmpty(){
        return this.item.length===0;
     }
     front(){
        if(this.isEmpty()) return -1;
        return this.item[0];
     }
     rear(){
        if(this.isEmpty()) return -1;
        return this.item.pop();

     }

     isFull(){
        if(this.count===this.size) return true;
     }

}

let circularQueue = new Queue(3)

console.log(circularQueue.enqueue(10)); 
console.log(circularQueue.enqueue(20)); 
console.log(circularQueue.enqueue(30)); 
console.log(circularQueue.enqueue(40)); 
console.log(circularQueue.rear());     
console.log(circularQueue.isFull());    
console.log(circularQueue.dequeue());   
console.log(circularQueue.enqueue(40)); 
console.log(circularQueue.rear()); 


//output
// true
// true
// true
// false
// 30
// true
// 10
// true
// 40