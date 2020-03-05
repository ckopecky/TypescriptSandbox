const profile = {
    first_name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lon: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { first_name, age, coords, setAge }: 
    { 
        first_name: string, 
        age: number, 
        coords: { lat: number, lon: number }, 
        setAge(age: number): void 
    } = profile;
