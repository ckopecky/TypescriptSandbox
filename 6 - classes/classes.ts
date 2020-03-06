class Vehicle {
    constructor(public color: string = 'red') {
        this.color = color;
    }
    protected drive(): void {
        console.log('vroom vroom');
    }
    public honk(): void {
        console.log('beep beep');
    }
}

const vehicle = new Vehicle();


class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
        this.wheels = wheels;
    }
    drive(): void {
        console.log('chugga chugga')
    }

    startDrive(): void {
        this.drive();
    }
    
}

const car = new Car(4, 'silver');
car.honk();
car.startDrive();
console.log(car.wheels);
console.log(car.color);

//modifiers public, private, protected

//public: anywhere, anytime...default
//private:  can only be called by other methods in this class
//protected: can only be called by other methods in this class, or by other methods in child classes. 

//THIS DOES NOT RELATE TO SECURITY!! Only to restrict methods that other developers call. 