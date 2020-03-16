import { MatchReader }from './MatchReader';
import { CsvReader } from './composition/CsvReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analysers';
import { ConsoleReport, HTMLReport } from './reports';


const csvReader = new CsvReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load()
let summary = new Summary(new WinsAnalysis('Man United'), new HTMLReport());

summary.buildPrintReport(matchReader.matches);





