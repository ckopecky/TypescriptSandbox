"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(str) {
        this.str = str;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var numWins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.str && match[5] === MatchResult_1.MatchResult.HomeWin) {
                numWins++;
            }
            if (match[2] === this.str && match[5] === MatchResult_1.MatchResult.AwayWin) {
                numWins++;
            }
        }
        return "Team *" + this.str + "* number of wins: " + numWins;
    };
    ;
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
