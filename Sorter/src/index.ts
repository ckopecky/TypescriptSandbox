import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";
import LinkedList from "./LinkedList";

//tsc config json file is created with tsc --init
//package json file is created with yarn init -y


// export interface Sortable {
//     length: number;
//     swap(i: number, j: number): void;
//     compare(i: number, j: number): boolean;
// }

//tests
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);


const charCollection = new CharactersCollection("XaaayxzZ2ka12");
charCollection.sort();
console.log(charCollection.data);

const ll = new LinkedList;
ll.add(500);
ll.add(1952);
ll.add(-23);
ll.add(0);
ll.sort();
ll.print()