import { User, UserProps } from "./User";
import { EventClass } from "./EventClass";
import Axios, { AxiosResponse } from "axios";

export class Collection {
    models: User[] = [];
    events: EventClass = new EventClass();
    
    constructor(public rootUrl: string) {}

    
    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        Axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((value: UserProps) => {
                    const user = User.buildUser(value);
                    this.models = [...this.models, user];
                });
            })
            this.trigger('change');
    }
}