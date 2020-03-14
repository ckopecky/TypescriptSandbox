"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var football = fs_1.default.readFileSync("football.csv", {
    encoding: "utf-8"
}); //returns a string
//need to parse the data to make it more usable
var split = football.split('\n').map(function (row) { return row.split(','); });
console.log(split);
// gives us an array of arrays with match info inside each indiv array as strings
