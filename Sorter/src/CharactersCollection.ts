class CharactersCollection {
    data: string;
    constructor(data: string) {
        this.data = data;
    }

    get length() : number {
        return this.data.length;
    }

    compare(i: number, j: number) : boolean {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    }

    swap(i: number, j: number): void {
        const split = this.data.split('');
        [split[i], split[j]] = [split[j], split[i]]
        this.data = split.join('');
    }
}

export default CharactersCollection;