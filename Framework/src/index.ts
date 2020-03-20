import { User } from './models/User';
import faker  from "faker";

let user = new User({name: faker.name.firstName() + " " + faker.name.lastName(), age: faker.random.number(99)})

user.save()

user.events.trigger('change');

console.log(user);




