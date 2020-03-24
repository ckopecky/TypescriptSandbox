
export class Attributes<Type> {
    constructor(private info: Type) {}
    
    getAll = (): Type => {
        return this.info;
    }

    get = <K extends keyof Type>(propName: K): Type[K] => {
            console.log("get -- Attributes", this.info);
            return this.info[propName];
    } 

    set = (update : Type) : void => {
        console.log("set -- Attributes")
        for(let item in update) {
            this.info[item] = update[item]
        }
        console.log("Attributes: ", this.info)

    }
}