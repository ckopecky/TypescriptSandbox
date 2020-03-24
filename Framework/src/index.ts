import { UserForm } from './views/UserForm';
import { User } from './models/User';
import { attributes } from './models/Person';


const parent = document.getElementById("root") as Element;
const user = User.buildUser(attributes);
const userForm: UserForm = new UserForm(parent, user)

userForm.render();

