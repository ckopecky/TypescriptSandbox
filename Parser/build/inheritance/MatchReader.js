"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader_1 = require("./CsvReader");
var utils_1 = require("../utils");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReader.prototype.mapRow = function (match) {
        console.log("\n        Match:\n            Date: " + utils_1.dateStringToDate(match[0]).toDateString() + "\n            HomeTeam: " + match[1] + "\n            AwayTeam: " + match[2] + "\n            HomeGoals: " + match[3] + "\n            AwayGoals: " + match[4] + "\n            Winner: " + (match[5] === "H" ? match[1] : match[5] === "A" ? match[2] : "Neither -- Draw") + "\n            Referee: " + match[6] + "\n\n        ");
        return [
            utils_1.dateStringToDate(match[0]).toDateString(),
            match[1],
            match[2],
            Number(match[3]),
            Number(match[4]),
            match[5],
            match[6]
        ];
    };
    return MatchReader;
}(CsvReader_1.CsvReader));
exports.MatchReader = MatchReader;
