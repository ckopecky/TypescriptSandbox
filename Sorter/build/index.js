"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var LinkedList_1 = __importDefault(require("./LinkedList"));
//tsc config json file is created with tsc --init
//package json file is created with yarn init -y
// export interface Sortable {
//     length: number;
//     swap(i: number, j: number): void;
//     compare(i: number, j: number): boolean;
// }
//tests
var numbersCollection = new NumbersCollection_1.default([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charCollection = new CharactersCollection_1.default("XaaayxzZ2ka12");
charCollection.sort();
console.log(charCollection.data);
var ll = new LinkedList_1.default;
ll.add(500);
ll.add(1952);
ll.add(-23);
ll.add(0);
ll.sort();
ll.print();
