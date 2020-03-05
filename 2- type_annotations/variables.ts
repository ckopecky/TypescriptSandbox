const apples: number = 5;
//number is the type annotation. 

let speed: string = "fast";
speed = "slow";
//will throw err because it is not assignable to type string.

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];

//string[] === array of strings

let numbers: number[] = [1, 2, 3];

class Car {

}

let car: Car = new Car();

//Object literal

let point: {x: number, y: number, name: { city: string, state: string } } = {
    x: 10,
    y: 20,
    name: {
        city: "Lawrence",
        state: "KS"
    }
}

// function

const logNumber: (i: number) => void = (i: number ) => {
    console.log(i);
}

//When to use annotations:
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}'
const coordinates: { x: number, y: number } = JSON.parse(json); //right now this of type 'any' -- TS can't figure out if there are any errors.

// 2) When we declare a var on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
    }
}

// 3) when we have a variable that has a type that can't be easily inferred

let myNumbers = [-10, -1, 12 ];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < myNumbers.length; i++) {
    if(myNumbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}



