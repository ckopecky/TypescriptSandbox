import { Analyzer }from "./Summary";
import { MatchData } from "./MatchData";
import { MatchResult } from './MatchResult';

export class WinsAnalysis implements Analyzer {

    constructor(public str: string) {}
    
    run(matches: MatchData[]): string {
        let numWins = 0;
        for(let match of matches) {
            if(match[1] === this.str && match[5] === MatchResult.HomeWin) {
                numWins++;
            }
            if(match[2] === this.str && match[5] === MatchResult.AwayWin) {
                numWins++;
            }
        }
        return `Team *${this.str}* number of wins: ${numWins}`;
    };
    
}
