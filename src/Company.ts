import faker from 'faker';
import { MappableClass } from './Map';

//implements helps us pinpoint sources of any errors. Says that the Company class will implement the MappableClass interface. 
class Company implements MappableClass {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
            <div>
                <h1>Company Name: ${this.name}</h1>
                <h4>Catchphrase: ${this.catchPhrase}</h4>
            </div>
        `
    }
}

export default Company;