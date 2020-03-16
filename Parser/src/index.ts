import {MatchReader }from './MatchReader';
import { MatchResult} from './MatchResult';

const reader: MatchReader = new MatchReader('football.csv');

reader.read();

const matches = reader.data;

const numWins = (str: string) => {
    let numWins: number = 0;
    for(let match of matches) {
        if(match[1] === str && match[5] === MatchResult.HomeWin) {
            numWins++;
        }
        if(match[2] === str && match[5] === MatchResult.AwayWin) {
            numWins++;
        }
    }
    return `${str} number of wins: ${numWins}`;
}




console.log(numWins('Leicester'));


