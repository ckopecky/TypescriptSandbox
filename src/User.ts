import faker from 'faker';
import { MappableClass } from './Map';

//implements helps us pinpoint sources of any errors. Says that the User class will implement the MappableClass interface. 
class User implements MappableClass {

    name: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor() {
        this.name = faker.name.firstName() + " " + faker.name.lastName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
        <div>
            <h1>User Name: ${this.name}</h1>
            <h4>Location: ${this.location.lat}, ${this.location.lng}</h4>
        </div>
        `
    }
}

export default User;