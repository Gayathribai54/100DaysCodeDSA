

//Day 59

class Queue{
    constructor(){
        this.item=[];
    }
    enqueue(item){
       return this.item.push(item);
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
        this.item[0];
    }
    size(){
        return this.item.length
    }
    reverse(k){
        let stack=[];
        if(k<=0){
            return "no change"
        }
        if(k>this.size()){
           k=this.size();
        }
        if(this.item.length===0){
            return "empty"
        }

        //i am dequing first k and pushing into stack
        for(let i=0; i<k; i++){
            stack.push(this.dequeue())
        }
        

        //see here i am pop from stack as it takes from end 
        //the pop elemnts i am enequeue so that it is automatically reversed
        //
        while(stack.length>0){
            this.enqueue(stack.pop());
        }
         
        //here i am removing dequeue the items and enqueue
        let remaining =this.size()-k;
        for(let i=0;i<remaining;i++){
            this.enqueue(this.dequeue());
        }
        return this.item;

    }
}

let queue= new Queue();
    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    console.log(queue.item)
    queue.reverse(3);
    console.log("after reversing first 3:", queue.item);


    //output 

//[ 10, 20, 30, 40, 50 ]
//after reversing first 3: [ 30, 20, 10, 40, 50 ]
