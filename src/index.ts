import {CsvFileReader} from "./CsvFileReader";

const footballMatchReader = new CsvFileReader('football.csv');
footballMatchReader.read();
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

let manUnitedWins = 0;

for (let match of footballMatchReader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// console.log('matches', matches);
console.log(`Man United won ${manUnitedWins} games.`);