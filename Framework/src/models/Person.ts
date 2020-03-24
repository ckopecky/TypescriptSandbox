import faker from 'faker';


interface PersonProps {
    firstName: string;
    lastName: string;
    age: number;
}
export class Person {
    firstName:string;
    lastName: string;
    age: number;

    constructor(attributes: PersonProps) {
        this.firstName = attributes.firstName;
        this.lastName = attributes.lastName;
        this.age = attributes.age;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get currentAge(): number {
        return this.age;
    }
}

const firstName : string = faker.name.firstName();
const lastName : string = faker.name.lastName();
const age: number = faker.random.number(99);

let person = new Person({
    firstName, lastName, age
})

export const attributes = {
    name: person.fullName,
    age: person.currentAge
}