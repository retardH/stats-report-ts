import {MatchResult} from "./MatchResult";
import {dateStringToDate} from "./utils";

interface DataReader {
    read(): void;
    data: string[][];
}
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader {
    public reader: DataReader;

    constructor(reader: DataReader) {
        this.reader = reader;
    }

// .map((row: string[]): MatchData => {
//     return [
//         dateStringToDate(row[0]),
//     row[1],
//     row[2],
//     parseInt(row[3], 10),
//     parseInt(row[4], 10),
//     row[5] as MatchResult,
//     row[6],
// ]
// })
}