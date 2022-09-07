import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Contact } from 'src/app/shared/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private list: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  get list$(): Observable<Contact[]> {
    return this.list.asObservable();
  }
  constructor(
    private http: HttpClient
  ) {

  }

  getListContacts() {

    return this.http.get('http://localhost:8080/api/pros/contacts');
   
  }

  addContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>("http://localhost:8080/api/pros/contact/save", contact);
  }



  deleteItemById(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/pros/contact/delete` + '/' + id);
  }

  consultContact(id: number): Observable<Contact> {
    return this.http.get<Contact>("http://localhost:8080/api/pros/contact" + '/' + id);
  }

  updateContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>("http://localhost:8080/api/pros/contact/save", contact);
  }

  
  // listSectors():Observable<Sector[]> {
  //   return this.http.get<Sector[]>("http://localhost:8080/api/sec");
  // }

  // listCountries():Observable<Country[]> {
  //   return this.http.get<Country[]>("http://localhost:8080/api/coun");
  // }

}
