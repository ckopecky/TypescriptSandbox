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
import CharactersCollection from './CharactersCollection';
import LinkedList from "./LinkedList";

const arrSorter = new Sorter(new NumbersCollection([10, 3, -5, 60]));
arrSorter.sort();
console.log(arrSorter.collection);

const charSorter = new Sorter(new CharactersCollection('The quick brown fox jumped over the lazy dog'));
charSorter.sort();
console.log(charSorter.collection);

let ll = new LinkedList();
ll.add(54643);
ll.add(-1);
ll.add(-45);
ll.add(1952);

const listSorter = new Sorter(ll);
listSorter.sort();

const print = (ll: LinkedList) => {
    ll.print();
}

print(listSorter.collection);