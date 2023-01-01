import { MatchReader } from './inheritance/MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

Summary.winsAnalysisWithHtmlReport('Liverpool').buildAndPrintReport(
  matchReader.matches
);
