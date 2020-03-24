
type Callback = () => void;

export class EventClass {
    
    events: {
        [key: string]: Callback[];
    } = {};

     //on${eventName} ... event listener
    on = (eventName: string, callback: Callback) => {
        console.log("on -- EventClass")
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string) =>{
        console.log("trigger -- EventClass")
        const handlers = this.events[eventName] || [];
        if(!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(callback => {
            callback()
        })
    }
}