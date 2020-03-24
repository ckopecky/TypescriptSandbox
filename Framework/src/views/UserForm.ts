import { User } from "../models/User";

export class UserForm {
    parent: Element
    model: User

    constructor(parent: Element, model: User) {
        this.parent = parent;
        this.model = model;
        this.bindModel()
        
    }

    bindModel = (): void => {
        this.model.on('change', () => {
            this.render();
        })
    }

    eventsMap(): { [key: string]: () => void} {
        return {
            'click:.set-random-age' : () => this.handleSetAge(),
            'click:.submit-info': () => this.handleSubmit(), 
        };
        
    }

    handleClick(): void {
        console.log("Hi there!");
    }

    handleSubmit = (): void => {
        let input1: HTMLInputElement = this.parent.querySelector('.set-name') as HTMLInputElement;
        let input2: HTMLInputElement = this.parent.querySelector('.set-age') as HTMLInputElement;
        const name = input1.value;
        const age = input2.value;
        if(name && age) {
            this.model.set({ name, age })
        } else if(name && !age) {
            this.model.set({name});
        } else if(age && !name) {
            this.model.set({age});
        }

    }

    handleHover(color: string): void {
        const h1: HTMLHeadingElement = document.querySelector('h1') as HTMLHeadingElement;
        h1.style.color = color;
    }

    handleSetAge = (): void => {
        this.model.randomAge();
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for(let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");

            fragment.querySelectorAll(selector).forEach(item => {
                item.addEventListener(eventName, eventsMap[eventKey])
            });
        }
    }

    template(): string {
        return `
                <div>
                    <h1>User Form</h1>
                    <div>Name: ${this.model.get('name')}</div>
                    <div>Age: ${this.model.get('age')}</div>
                    <br/>
                    <div>
                        <label>Name:</label>
                        <input class="set-name" type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input class="set-age" type="number" placeholder="Age"/>
                    </div>
                    <br/>
                    <br/>
                    <button class="set-random-age">Set Random Age</button>
                    <button class="submit-info">Save</button>
                </div>
                `;
    }

    render(): void {
        this.parent.innerHTML = "";
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}