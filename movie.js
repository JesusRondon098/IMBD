"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.printDatos = function () {
        return "".concat(this.title, " - ").concat(this.releaseYear, " - ").concat(this.nationality, " - ").concat(this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
