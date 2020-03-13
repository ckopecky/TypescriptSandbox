"use strict";
//tsc config json file is created with tsc --init
//package json file is created with yarn init -y
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var LinkedList_1 = __importDefault(require("./LinkedList"));
var arrSorter = new Sorter(new NumbersCollection_1.default([10, 3, -5, 60]));
arrSorter.sort();
console.log(arrSorter.collection);
var charSorter = new Sorter(new CharactersCollection_1.default('The quick brown fox jumped over the lazy dog'));
charSorter.sort();
console.log(charSorter.collection);
var ll = new LinkedList_1.default();
ll.add(54643);
ll.add(-1);
ll.add(-45);
ll.add(1952);
var listSorter = new Sorter(ll);
listSorter.sort();
var print = function (ll) {
    ll.print();
};
print(listSorter.collection);
