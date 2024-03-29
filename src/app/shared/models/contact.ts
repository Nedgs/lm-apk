import { Company } from "./company";
import { Lifecycle } from "./lifecycle";


export class Contact {
    id! : number;
    name! : string| null|undefined;
    email! : string| null|undefined;
    phone! : string|null|undefined
    createdAt? : Date | null;
    updatedAt? : Date | null;
    lifecycle? : Lifecycle| null;
    company? : Company| null;

    
  
  }
  