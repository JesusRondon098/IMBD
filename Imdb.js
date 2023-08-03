"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.toJson = function () {
        return { peliculas: this.peliculas };
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var dato = JSON.stringify(this, null, 2);
        fs.writeFileSync(nombreFichero, dato);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
