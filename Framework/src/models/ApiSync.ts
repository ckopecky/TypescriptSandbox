import Axios, { AxiosPromise } from "axios";


interface HasValue<T> {
    id?: T;
}
export class ApiSync<Type extends HasValue<number>> {

    constructor(public rootUrl: string) {}

    fetch = (id: number): AxiosPromise => {
        console.log("fetch -- Sync")
        return Axios.get(`${this.rootUrl}/${id}`) ;   
    }

    save = (info: Type): AxiosPromise => {
        console.log("save -- Sync")
        if(info.id) {
            console.log("PUT")
            return Axios.put(`${this.rootUrl}/${this.fetch(info.id)}`, info);
        } else {
            console.log("POST")
            return Axios.post(this.rootUrl, info);
        }
    }
}