//tsc config json file is created with tsc --init
//package json file is created with yarn init -y


interface Sortable {
    length: number;
    swap(i: number, j: number): void;
    compare(i: number, j: number): boolean;
}
class Sorter {
    constructor(public collection: Sortable){}

    sort(): void {
        const { length }= this.collection;

        for(let i = 0; i < length; i++) {
            for(let j = 0; j < length - i - 1; j++) {
                if(this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }


    }
}

import NumbersCollection from './NumbersCollection';

const sorter = new Sorter(new NumbersCollection([10, 3, -5, 60]));
sorter.sort();
console.log(sorter.collection);