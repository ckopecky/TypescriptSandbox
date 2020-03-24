import { AxiosResponse, AxiosPromise } from "axios";

interface ModelAttributes<Type> {
    set(value: Type): void;
    getAll(): Type;
    get<K extends keyof Type>(key: K): Type[K];
}

interface APISync<Type> {
    fetch(id: number): AxiosPromise;
    save(data: Type): AxiosPromise;
}

interface Event {
    on(eventName: string, cb: () => void): void;
    trigger(eventName: string): void;
}

interface HasId {
    id? : number;
}


export class Model<Type extends HasId> {
    constructor(
        private attributes: ModelAttributes<Type>,
        private events: Event,
        private apiSync: APISync<Type>
    ) {}

    get on(){
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set = (update: Type): void => {
        console.log("set -- User")
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch = (): void => {
        console.log("fetch -- User")
        const id = this.get('id');
        if(typeof id !== 'number') {
            console.log("fetch -- User", id)

            throw new Error("Cannot fetch without an id")
        }
        else {
            console.log("fetch -- User", id);
            this.apiSync.fetch(id)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            })
            .catch((err: string) => {
                throw new Error(err);
            });
        }
    }

    save = (): void => {
        this.apiSync.save(this.attributes.getAll())
            .then((response : AxiosResponse) => {
                this.trigger('save');
            })
            .catch(err => {
                this.trigger('error');
            })
    }
}