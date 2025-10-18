

//DAY 60 CHALLENGE 
// You are given an array A of integers and an integer K representing the window size.
// For each contiguous subarray (window) of size K, find the first negative integer in that window.
// If a window doesn’t contain any negative integer, print 0 for that window.


class Queue{
    constructor(){
        this.item=[];
    }
    enqueue(item){
        return this.item.push(item);
    }
    dequeue(){
        return this.item.shift();
    }
    front(){
        if(this.isEmpty()) return null;
        return this.item[0]
    }
    isEmpty(){
        return this.item.length===0;
    }
}


class FirstNegativeWindow{
    constructor(arr,k) {
        this.arr = arr;
        this.k = k;
        this.queue = new Queue()
    }
    findFirst(){
        const result = [];
        for(let i = 0;i<this.arr.length; i++){
            if(this.arr[i] < 0){
                this.queue.enqueue(i);
            }
            while(!this.queue.isEmpty() && this.queue.front() <= i - this.k){
                this.queue.dequeue();
            }
            if(i >= this.k - 1){
                if(!this.queue.isEmpty()){
                    result.push(this.arr[this.queue.front()]);
                }else{
                    result.push(0)
                }
            }
        }
        return result;
    }
}

const window = new FirstNegativeWindow([12, -1, -7, 8, -15, 30, 16, 28],3)
console.log(window.findFirst().join(" "))


//output
//-1 -1 -7 -15 -15 0
