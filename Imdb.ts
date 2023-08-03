import { Movie } from "./movie";
let fs = require("fs")
export class Imdb{
    public peliculas : Movie[]
    constructor(peliculas : Movie[]){
     this.peliculas = peliculas;
    }
    public toJson(){
        return {peliculas : this.peliculas}
    }
    escribirEnFicheroJSON(nombreFichero:string):void{
        let dato = JSON.stringify(this, null, 2);
        fs.writeFileSync(nombreFichero, dato);
    }
}