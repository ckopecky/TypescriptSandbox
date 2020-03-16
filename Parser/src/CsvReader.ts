import fs from 'fs';
//this is a generic class

export abstract class CsvReader<TypeOfData> {
    data: TypeOfData[] = [];
    constructor( public filename: string) {
    }

    abstract mapRow(match: string[]): TypeOfData;


    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8"
        })
            .split('\n')
            .map(
                (row: string):string[] => row.split(','))
                .map(this.mapRow)
    }
}

