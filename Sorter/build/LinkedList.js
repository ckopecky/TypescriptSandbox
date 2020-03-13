"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("."));
var SingleNode = /** @class */ (function () {
    function SingleNode(data) {
        this.data = data;
        this.next = null;
    }
    return SingleNode;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
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
}(_1.default));
exports.default = LinkedList;
