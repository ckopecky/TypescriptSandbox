"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var faker_1 = __importDefault(require("faker"));
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1["default"].name.firstName() + " " + faker_1["default"].name.lastName();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    return User;
}());
exports["default"] = User;
