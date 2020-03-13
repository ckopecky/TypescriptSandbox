"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (i, j) {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (i, j) {
        var _a;
        var split = this.data.split('');
        _a = [split[j], split[i]], split[i] = _a[0], split[j] = _a[1];
        this.data = split.join('');
    };
    return CharactersCollection;
}());
exports.default = CharactersCollection;
