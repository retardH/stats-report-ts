import fs from 'fs';
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";

export class CsvFileReader {
    fileName: string;
    data: string[][] = [];
    constructor(fileName: string) {
        this.fileName = fileName;
    }

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            });
    }
}