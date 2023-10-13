import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

const footballMatchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Everton');


footballMatchReader.load();
summary.buildAndPrintReport(footballMatchReader.matches);


