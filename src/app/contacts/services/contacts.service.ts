import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';
import { Contact } from 'src/app/shared/models/contact';
import { Lifecycle } from 'src/app/shared/models/lifecycle';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application.json" }),
};
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private list: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  get list$(): Observable<Contact[]> {
    return this.list.asObservable();
  }
  constructor(
    private http: HttpClient, private authService: AuthService
  ) {

  }

  getListContacts():Observable<Contact[]> {

    

    return this.http.get<Contact[]>('http://localhost:8080/api/pros/contacts');
   
  }

  addContact(contact: Contact, lifecycleId:string|null|undefined, companyId:string|null|undefined): Observable<Contact>{

    

    return this.http.post<Contact>("http://localhost:8080/api/pros/contact/save?lifecycleId="+lifecycleId+"&companyId="+companyId, contact);
  }



  deleteItemById(id: number): Observable<void> {

    

    return this.http.delete<void>(`http://localhost:8080/api/pros/contact/delete` + '/' + id);
  }

  consultContact(id: number): Observable<Contact> {
    return this.http.get<Contact>("http://localhost:8080/api/pros/contact" + '/' + id);
  }

  updateContact(contact: Contact, lifecycleId:number|null|undefined, companyId:string|null|undefined): Observable<Contact>{


    return this.http.post<Contact>("http://localhost:8080/api/pros/contact/save?lifecycleId="+lifecycleId+"&companyId="+companyId, contact);
  }


  
  listLifecycles():Observable<Lifecycle[]> {

    

    return this.http.get<Lifecycle[]>("http://localhost:8080/api/lifec");
  }
  

  // listCountries():Observable<Country[]> {
  //   return this.http.get<Country[]>("http://localhost:8080/api/coun");
  // }

}
