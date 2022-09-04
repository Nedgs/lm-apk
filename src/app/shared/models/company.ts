import { City } from "./city";


export class Company {
    id! : number;
    name! : string| null|undefined;
    // owner: string | null;
    createdAt? : Date | null;
    phone! : string|null|undefined
    city? : City| null;
    // country: string | null;
    // sector: string | null;
  
  }
  