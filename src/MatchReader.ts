import {MatchResult} from "./MatchResult";
import {dateStringToDate} from "./utils";
import {MatchData} from "./MatchData";
import {CsvFileReader} from "./CsvFileReader";

interface DataReader {
    data: string[][];

    read(): void;
}

export class MatchReader {
    public matches: MatchData[] = [];
    public reader: DataReader;

    constructor(reader: DataReader) {
        this.reader = reader;
    }

    static fromCsv(fileName: string): MatchReader {
        return new MatchReader(new CsvFileReader(fileName));
    }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3], 10),
                parseInt(row[4], 10),
                row[5] as MatchResult,
                row[6],
            ]
        });
    }

}