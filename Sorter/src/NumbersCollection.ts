class NumbersCollection {
    data: number[];
    
    constructor(data: number[]) {
        this.data = data;
    }

    
    get length() : number {
        return this.data.length;
    }
    

    compare(i: number, j: number): boolean {
        return this.data[i] > this.data[j];
    };

    swap(i: number, j: number): void {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    };


}

export default NumbersCollection;