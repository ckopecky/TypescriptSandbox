// creates a new type, describing the property names and value types of an object -- this is a custom type!


const printVehicle = ({name, year, broken}: { name: string, year: number, broken: boolean }): void => {
    console.log(`Name: ${name}`);
    console.log(`Year: ${year}`);
    console.log(`Broken: ${broken}`);
} // this could use an interface to make code more readable

//new type!
interface Reportable  {
    summary(): string 
}


const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    name: "pepsi",
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink is ${this.name} and has ${this.sugar} grams of sugar.`
    }
}

//this is a more generic function that is reusable
const logItem = (item: Reportable): void => {
    console.log(item.summary());
} // this makes it more readable

logItem(oldCivic);
logItem(drink);

