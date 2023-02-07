import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICustomer } from "src/app/customer/ICustomer";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'  
})

export class HttpService{
    
    private readonly putsreqValue: string = "https://httpbin.org/post";

    constructor(private http: HttpClient) {
        
    }

    sendData(customer: ICustomer): Observable<any>{
        console.log(JSON.stringify(customer));
        return this.http.post(this.putsreqValue, JSON.stringify(customer));
    }

}