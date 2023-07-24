"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarnumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarnumber = oscarnumber;
        this.profession = profession;
    }
    Professional.prototype.print = function () {
        return " ".concat(this.name, " - ").concat(this.age, " - ").concat(this.weight, " - ").concat(this.height, " - ").concat(this.isRetired, " - ").concat(this.nationality, " - ").concat(this.oscarnumber, " - ").concat(this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
