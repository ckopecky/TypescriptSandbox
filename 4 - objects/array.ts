//in typescript, we tend to make use of one specific type of element in an array

const carMakers: string[] = [];
const dates: Date[] = [];

const carsByMake: string[][] = [];

// Help with inference when extracting values

const usedCar = carMakers[1];

//Prevent incompatible values

carMakers.push('subaru');

// Help with map, forEach, reduce

carMakers.map((usedCar: string): string => {
    return usedCar.toUpperCase();
});

//Flexible types

const importantDates: (Date | string)[] = [new Date(), '2030-10-20'];

// typed arrays would be good to use when we want to represent a collection of records with some arbitrary sort order

