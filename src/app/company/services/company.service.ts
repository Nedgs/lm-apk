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

  getListProducts() {

    return this.http.get('http://localhost:3000/products')
    // this.http.get<Product[]>('http://localhost:3000/products')
    //   .subscribe({
    //     next: (products) => this.list.next(products)
    //   });
  }
}
