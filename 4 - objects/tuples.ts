// array-like structure where each element represents some property of a record

// when we work with a tuple, it's a fixed series of information. 

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// const pepsi = [ 'brown', true, 40 ]; // this is an array -- we can freely swap meanings. So we have to use a tuple syntax instead

// const pepsi: [string, boolean, number] = ['brown', true, 30]; //this is a tuple

type Drink = [ string, boolean, number ];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number ] = [ 400, 3354 ];

const carStats = {
    horsepower: 400,
    weight: 3354
} // here an object is better because it clearly indicates what the nums mean

//won't use tuples very often









