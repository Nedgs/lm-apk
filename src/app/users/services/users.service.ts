import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Role } from 'src/app/shared/models/role';
import { RoleToUserForm } from 'src/app/shared/models/RoleToUserForm';
import { User } from 'src/app/shared/models/user';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application.json" }),
};
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

  getListUsers(): Observable<User[]> {

    return this.http.get<User[]>('http://localhost:8080/api/users/all');
   
  }

  addUser(user: User): Observable<User>{

    return this.http.post<User>("http://localhost:8080/api/users/user/save", user);
  }

  addRoleToUser(form: RoleToUserForm){
    return this.http.post<RoleToUserForm>("http://localhost:8080/api/users/role/addtouser", form)
  }

  rolesList(): Observable<Role[]> {
    return this.http.get<Role[]>("http://localhost:8080/api/rol");
  }

  deleteItemById(id: number): Observable<void> {

    return this.http.delete<void>(`http://localhost:8080/api/users/user/delete` + '/' + id);
  }

  consultUser(id: number): Observable<User> {
    return this.http.get<User>("http://localhost:8080/api/users/user" + '/' + id);
  }

  updateUser(user: User): Observable<User>{

    return this.http.post<User>("http://localhost:8080/api/users/user/save", user);
  }

}
