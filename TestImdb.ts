import { Imdb } from "./Imdb";
import { Movie } from "./movie";
let pelicula = new  Movie("El patriota", 2005, "Estados Unidos", "Belica");
let pelicula1 = new Movie("Doraemon", 1990, "Japonesa", "Animada");
let pelicula2 = new Movie("Star War", 1980, "Estados Unidos", "Ciencia Ficcion");

let peliculas: Movie[] = [pelicula,pelicula1,pelicula2];
let imdb = new Imdb(peliculas);

console.log(imdb);
