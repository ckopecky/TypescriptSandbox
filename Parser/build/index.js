"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvReader_1 = require("./CsvReader");
var MatchResult_1 = require("./MatchResult");
var csvReader = new CsvReader_1.CsvReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvReader);
matchReader.load();
var numWins = function (str) {
    var numWins = 0;
    for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
        var match_1 = _a[_i];
        if (match_1[1] === str && match_1[5] === MatchResult_1.MatchResult.HomeWin) {
            numWins++;
        }
        if (match_1[2] === str && match_1[5] === MatchResult_1.MatchResult.AwayWin) {
            numWins++;
        }
    }
    return str + " number of wins: " + numWins;
};
console.log(numWins('Man United'));
