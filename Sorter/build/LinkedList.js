"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleNode = /** @class */ (function () {
    function SingleNode(data) {
        this.data = data;
        this.next = null;
    }
    return SingleNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new SingleNode(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var counter = 1;
            if (!this.head) {
                return 0;
            }
            var node = this.head;
            while (node.next) {
                counter++;
                node = node.next;
            }
            return counter;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                //found node we are looking for;
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (i, j) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        var iNode = this.at(i).data;
        var jNode = this.at(j).data;
        return iNode > jNode;
    };
    LinkedList.prototype.swap = function (i, j) {
        // only going to be swapping vlaues, not the nodes themselves. 
        var iNode = this.at(i);
        var jNode = this.at(j);
        var temp = iNode.data;
        iNode.data = jNode.data;
        jNode.data = temp;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.default = LinkedList;
