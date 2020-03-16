import { MatchReader }from './MatchReader';
import { CsvReader } from './CsvReader';
import { MatchResult} from './MatchResult';
import { match } from 'assert';


const csvReader = new CsvReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();
const numWins = (str: string) => {
    let numWins: number = 0;
    for(let match of matchReader.matches) {
        if(match[1] === str && match[5] === MatchResult.HomeWin) {
            numWins++;
        }
        if(match[2] === str && match[5] === MatchResult.AwayWin) {
            numWins++;
        }
    }
    return `${str} number of wins: ${numWins}`;
}




console.log(numWins('Man United'));


