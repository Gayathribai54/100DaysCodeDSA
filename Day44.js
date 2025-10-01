class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class circularLinked {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertSongAtStart(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = newNode;
        }
        this.size++;
    }



    insertSongAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
        }
        else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }


    showPlaylist() {
        let result = [];
        if (!this.head) return result;
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        }
        while (current !== this.head);
        return result;
    }



    playSongsInLoop(k) {
        if (!this.head) return;
        let current = this.head;
        for (let i = 0; i < k; i++) {
            console.log("Playing: " + current.data);
            current = current.next;
        }
    }


}


const songs = new circularLinked();


songs.insertSongAtEnd("SHAPE OF YOU");
songs.insertSongAtEnd("BELIEVER");
songs.insertSongAtStart("SENORITA");
console.log("Playlist:", songs.showPlaylist().join(" -> "));
songs.playSongsInLoop(5)