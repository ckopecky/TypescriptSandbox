import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    //pass in an instance of an object for Analyzer and for OutputTarget
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

    buildPrintReport(matches: MatchData[]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}