import User from "./User";
import Company from "./Company";
import CustomMap from "./Map";

const company = new Company();
const user = new User();

let map = document.getElementById('map')
let customMap = new CustomMap(map);

customMap.addMarker(user);
customMap.addMarker(company);






