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

    return this.http.get('http://localhost:3000/contacs')
   
  }
}
