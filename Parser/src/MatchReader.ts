import { CsvReader}from "./CsvReader";
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [string, string, string, number, number, MatchResult, string]

export class MatchReader extends CsvReader<MatchData> {
    mapRow(match: string[]): MatchData {
        console.log(`
        Match:
            Date: ${dateStringToDate(match[0]).toDateString()}
            HomeTeam: ${match[1]}
            AwayTeam: ${match[2]}
            HomeGoals: ${match[3]}
            AwayGoals: ${match[4]}
            Winner: ${match[5] === "H" ? match[1]: match[5] === "A" ?match[2] : "Neither -- Draw"}
            Referee: ${match[6]}

        `)
        return [
            dateStringToDate(match[0]).toDateString(),
            match[1],
            match[2],
            Number(match[3]),
            Number(match[4]),
            match[5] as MatchResult,
            match[6]
        ]
}
}