import NumbersCollection from "./NumbersCollection";

//tsc config json file is created with tsc --init
//package json file is created with yarn init -y


export interface Sortable {
    length: number;
    swap(i: number, j: number): void;
    compare(i: number, j: number): boolean;
}


const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);


