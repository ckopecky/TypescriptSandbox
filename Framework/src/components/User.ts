interface UserInfo {
    name?: string;
    age?: number;
} // question mark makes prop optional

type Callback = () => void; //type alias

export class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserInfo) {}

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserInfo): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string) : void {
        const handlers = this.events[eventName] || [];
        if(!handlers.length || !handlers) {
            return;
        }
        else {
            handlers.forEach(cb => {
                cb();
            })
        }
    }
}