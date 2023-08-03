import { log } from "console";
import { Imdb } from "./Imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";
let fs = require("fs");
let readlineSync = require("readline-sync")
let pelicula = new  Movie("El patriota", 2005, "Estados Unidos", "Belica");
let pelicula1 = new Movie("Doraemon", 1990, "Japonesa", "Animada");
let pelicula2 = new Movie("Star War", 1980, "Estados Unidos", "Ciencia Ficcion");
let name = readlineSync.question("name") 
let age = readlineSync.question("age")
let weight = readlineSync.question("weight")
let height = readlineSync.question("height")
let isRetired = readlineSync.question("isRetired")
let nationality = readlineSync.question("nationality")
let oscarnumber = readlineSync.question("oscarnumber")
let profession = readlineSync.question("profession")
let newProfesional = new Professional(name, age, weight, height, isRetired, nationality, oscarnumber, profession);
console.log(newProfesional)
let peliculas: Movie[] = [pelicula,pelicula1,pelicula2];
let imdb = new Imdb(peliculas);
let imdbString = JSON.stringify(imdb);
fs.writeFileSync("IMBD.json",imdbString)
console.log(imdbString);

//console.log(imdb.escribirEnFicheroJSON("pruebafinal.ts"));
imdb.escribirEnFicheroJSON("./jesusyomar.json")
