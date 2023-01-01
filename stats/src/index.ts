import { CsvFileReader } from './inheritance/CsvFileReader';
import { MatchReader } from './inheritance/MatchReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(reader);
matchReader.load();
const matches = matchReader.matches;

// Variable named after a specific team
let manUnitedWins = 0;

// Analysis type is fixed
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// No ability to output the report in different formats
console.log(`Man United won ${manUnitedWins} games`);
