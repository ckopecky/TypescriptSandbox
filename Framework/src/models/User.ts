
import faker  from "faker";

import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { EventClass } from "./EventClass";
import { Collection } from "./Collection";





const rootUrl = 'http://localhost:3000/users';

type StringState = {
    [value: string]: string
}

type NumberState = {
    [value: string]: number
}

export interface UserProps  {
    [prop: string]: StringState["value"] | NumberState["value"];
}

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new EventClass(),
            new ApiSync<UserProps>(rootUrl)
        )
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootUrl,(json: UserProps) => User.buildUser(json));
    }

    randomAge = (): void => {
        let age = Math.floor(Math.random() * 100);
        this.set({ age })

    }

    

}

