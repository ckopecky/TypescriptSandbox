import { EventClass } from "./EventClass";
import Axios, { AxiosResponse } from "axios";

export class Collection<Type, Key> {
    models: Type[] = [];
    events: EventClass = new EventClass();
    
    constructor(public rootUrl: string, public deserialize: ((json: Key) => Type)) {}

    
    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        Axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((value: Key) => {
                    let deserial = this.deserialize(value);
                    this.models = [...this.models, deserial];
                });
            })
            this.trigger('change');
    }
}