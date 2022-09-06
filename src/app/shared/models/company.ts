import { City } from "./city";
import { Sector } from "./sector";


export class Company {
    id! : number;
    name! : string| null|undefined;
    // owner: string | null;
    createdAt? : Date | null;
    phone! : string|null|undefined
    city? : City| null;
    sector? : Sector| null;
    // country: string | null;
    // sector: string | null;
  
  }
  