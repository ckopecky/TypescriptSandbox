import {Sorter} from "./Sorter";

class SingleNode {
    next: SingleNode | null = null;
    constructor(public data: number) {}
}

class LinkedList extends Sorter {
    head: SingleNode | null = null;

    add(data: number): void {
        const node = new SingleNode(data);

        if(!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while(tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    get length():number {
        let counter = 1;

        if(!this.head) {
            return 0;
        }

        let node = this.head;

        while(node.next) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    at(index: number): SingleNode {
        if(!this.head){
            throw new Error('Index out of bounds');
        }

        let counter = 0;
        let node: SingleNode | null = this.head;

        while(node) {
            if(counter === index) {
                //found node we are looking for;
                return node;
            }
            counter++;
            node = node.next;
     
        }

        throw new Error('Index out of bounds');
    }

    compare(i: number, j: number):boolean {
        if(!this.head){
            throw new Error('List is empty');
        }
        let iNode = this.at(i).data;
        let jNode = this.at(j).data;

        return iNode > jNode;
    }

    swap(i: number, j: number): void {
        // only going to be swapping vlaues, not the nodes themselves. 
        const iNode = this.at(i);
        const jNode = this.at(j);

        const temp = iNode.data;
        iNode.data = jNode.data;
        jNode.data = temp;
    }

    print(): void {
        if(!this.head) {
            return;
        }
        let node: SingleNode | null = this.head;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }
}

export default LinkedList;