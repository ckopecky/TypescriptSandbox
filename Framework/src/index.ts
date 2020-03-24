import { attributes } from "./models/Person";
import { User } from "./models/User";

let user = User.buildUser(attributes);

user.save();


