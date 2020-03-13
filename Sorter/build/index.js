"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var numbersCollection = new NumbersCollection_1.default([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
