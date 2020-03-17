import { User } from "./components/User";

const root = document.querySelector("#root");
const user = new User({name: "Christina", age: 38});
root.textContent = user.get("name") + " " + user.get("age");
user.set({ name: "newName" });
root.textContent = user.get("name") + " " + user.get("age");

user.on('change', () => {
    console.log("hello")
})
user.on('click', () => {
    console.log('click!');
})
user.trigger('click');

