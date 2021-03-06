import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Company } from 'src/app/shared/models/company';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private list: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);

  get list$(): Observable<Company[]> {
    return this.list.asObservable();
  }
  constructor(
    private http: HttpClient
  ) {

  }

  getListCompanys() {

    return this.http.get('http://localhost:3000/companys')
   
  }

  create(company: Company): Observable<Company> {
    return this.http.post<Company>(`http://localhost:3000/companys`, company);
  }

  deleteItemById(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/companys` + '/' + id);
  }
}
