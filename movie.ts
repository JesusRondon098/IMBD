import { Professional } from "./professional";

export class Movie{
    public title : string;
    public releaseYear : number;
    public actors : Professional[];
    public nationality : string;
    public director : Professional;
    public write : Professional;
    public language : string;
    public plataforma : string;
    public isMCU : boolean;
    public mainCharacterName : string;
    public producer :string;
    public distributor : string;
    public genre : string;
    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nacionality;
        this.genre = genre;
    }
    public printDatos(){
        return `${this.title} - ${this.releaseYear} - ${this.nationality} - ${this.genre}`
    }
}