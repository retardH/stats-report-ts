import {MatchResult} from "./MatchResult";
import {MatchReader} from "./MatchReader";

const footballMatchReader = new MatchReader('football.csv');
footballMatchReader.read();

// console.log('reader data', footballMatchReader.data);
const dateOfFirstMatch = footballMatchReader.data[0][5];
let manUnitedWins = 0;

for (let match of footballMatchReader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games.`);