
//DAY 49 DSA CHALLENGE


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class circularLinkedList{
    constructor(data){
        this.head=null;
        this.tail=null;
    }
  insertAdd(data){
    let newNode= new Node(data);
    if(!this.head){
        this.head=this.tail=newNode;
        newNode.next=newNode;
        return;
    }
    else{
        newNode.next=this.head;
        this.tail.next=newNode;
        this.tail=newNode;
    }
  }
  

  deleteAdd(data) {
    if (!this.head) return;

    // single node case
    if (this.head === this.tail && this.head.data === data) {
      this.head = this.tail = null;
      return;
    }

    let current = this.head;
    let prev = this.tail;

    do {
      if (current.data === data) {
        prev.next = current.next;

        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = prev;

        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }





   showAdds(){
        if(!this.head) {
          console.log("no ads to show");
          return;
        }
        const result=[];
        let current=this.head;
        do{
           result.push(current.data);
           current=current.next;
        }
        while(current!==this.head);
            console.log(result.join("->"));
   }

   rotateAndShow(k){
    if(!this.head) {
      console.log("no ads available");
      return;
    }
        let current=this.head;
        for(let i=0; i<k; i++){
            current = current.next;
        }
        console.log("current Ad:", current.data);
   }




}

//testing

const ads= new circularLinkedList();
ads.insertAdd('nike');
ads.insertAdd('adidas');
ads.insertAdd('puma');
ads.insertAdd('Reebok');
ads.showAdds();
ads.rotateAndShow(5);
ads.deleteAdd("puma");
ads.showAdds();
ads.rotateAndShow(3);