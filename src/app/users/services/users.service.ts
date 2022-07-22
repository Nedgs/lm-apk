import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private list: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  get list$(): Observable<User[]> {
    return this.list.asObservable();
  }
  constructor(
    private http: HttpClient
  ) {

  }

  getListUsers() {

    return this.http.get('http://localhost:3000/users')
   
  }
}
