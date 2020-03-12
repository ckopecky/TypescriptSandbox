"use strict";
//tsc config json file is created with tsc --init
//package json file is created with yarn init -y
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var _a;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                //if collection is an arr of numbers
                //type guard -- reads the below if statement that collection must be an array. Allows us all the props and features associated with an array
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        //swap
                        _a = [this.collection[j + 1], this.collection[j]], this.collection[j] = _a[0], this.collection[j + 1] = _a[1];
                    }
                }
                //if collection is a string
                //typeof is used instead of instanceof for primitive values
                if (typeof this.collection === "string") {
                }
                //if collection is a linked list
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 60]);
sorter.sort();
console.log(sorter.collection);
