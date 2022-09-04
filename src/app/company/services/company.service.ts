import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Company } from 'src/app/shared/models/company';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application.json'})
};


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

    return this.http.get('http://localhost:8080/api/companys')
   
  }

  addCompany(company: Company,cityName:string|null|undefined): Observable<Company>{
    return this.http.post<Company>("http://localhost:8080/api/company/save?cityName="+cityName, company);
  }



  deleteItemById(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/company/delete` + '/' + id);
  }

  consultCompany(id: number): Observable<Company> {
    return this.http.get<Company>("http://localhost:8080/api/company" + '/' + id);
  }

  updateCompany(company: Company,cityName:string|null|undefined): Observable<Company>{
    return this.http.put<Company>("http://localhost:8080/api/company/save?cityName="+cityName, company);
  }

  // updateCompany(comp: Company) : Observable<Company> {
  //   return this.http.put<Company>("http://localhost:8080/api/company/save", comp);
  // }
}
