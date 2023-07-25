import { Imdb } from "./Imdb";
import { Movie } from "./movie";
let fs = require("fs");
let pelicula = new  Movie("El patriota", 2005, "Estados Unidos", "Belica");
let pelicula1 = new Movie("Doraemon", 1990, "Japonesa", "Animada");
let pelicula2 = new Movie("Star War", 1980, "Estados Unidos", "Ciencia Ficcion");

let peliculas: Movie[] = [pelicula,pelicula1,pelicula2];
let imdb = new Imdb(peliculas);
let imdbString = JSON.stringify(imdb);
fs.writeFileSync("IMBD.json",imdbString)
console.log(imdbString);
