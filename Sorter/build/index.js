"use strict";
//tsc config json file is created with tsc --init
//package json file is created with yarn init -y
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
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
var sorter = new Sorter(new NumbersCollection_1.default([10, 3, -5, 60]));
sorter.sort();
console.log(sorter.collection.data);
