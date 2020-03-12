//tsc config json file is created with tsc --init
//package json file is created with yarn init -y

import NumbersCollection from './NumbersCollection';

class Sorter {
    constructor(public collection: NumbersCollection){}

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

const sorter = new Sorter(new NumbersCollection([10, 3, -5, 60]));
sorter.sort();
console.log(sorter.collection.data);