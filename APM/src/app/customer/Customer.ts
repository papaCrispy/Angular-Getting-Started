import { ICustomer } from "./ICustomer";

export class Customer implements ICustomer{

    firstName: string;
    lastName: string;
    email: string;
    sendCatalog: boolean;
    addressType?: string;
    street1?: string;
    street2?: string;
    city?: string;
    state?: string;
    zip?: string;

    constructor() {
       this.firstName = "";
       this.lastName = "";
       this.email = "";
       this.sendCatalog = false;   
    }
          
}