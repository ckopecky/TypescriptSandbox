"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    ;
    NumbersCollection.prototype.swap = function (i, j) {
        var _a;
        _a = [this.data[j], this.data[i]], this.data[i] = _a[0], this.data[j] = _a[1];
    };
    ;
    return NumbersCollection;
}());
exports.default = NumbersCollection;
