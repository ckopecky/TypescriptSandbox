import Axios, {AxiosResponse} from "axios";
import { EventClass } from "./EventClass";

interface UserProps  {
    [prop: string]: number | string | undefined;
    name? : string;
    age? : number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
    public events: EventClass = new EventClass();

    constructor( private info: UserProps) {}
    
    get(propName: string): (string | number | undefined ) {
        if(this.info[propName]) {
            return this.info[propName];
        }
        else {
            return undefined;
        }
    } 

    set(update : UserProps) : void {
        for(let item in update) {
            this.info[item] = update[item]
        }
    }


    fetch(): void {
        Axios.get(`${rootUrl}/${this.get("id")}`)
            .then((response: AxiosResponse) => {
                this.set(response.data);
            })
    }

    save(): void {
        if(this.get("id")) {
            Axios.put(`${rootUrl}/${this.get('id')}`, this.info)
        } else {
            Axios.post(rootUrl, this.info)
        }
    }

}

