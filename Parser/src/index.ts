import fs from 'fs';

const football = fs.readFileSync("football.csv", {
    encoding: "utf-8"
}); //returns a string

//need to parse the data to make it more usable

const split = football.split('\n').map((row: string) => row.split(','));
console.log(split); 
// gives us an array of arrays with match info inside each indiv array as strings

