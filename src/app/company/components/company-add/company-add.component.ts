import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import {Router} from '@angular/router';
import { Company } from 'src/app/shared/models/company';
import { City } from 'src/app/shared/models/city';

@Component({
  selector: 'app-company-add',
  templateUrl: 'company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  newCompany = new Company();
  newCity = new City();
  newCity2! : City;
  
  constructor(private companysService: CompanyService, private router : Router) { }
  
  
  ngOnInit(): void {
  }

  addCompany(){
    this.companysService.addCompany(this.newCompany)
    .subscribe(company => {
      console.log(company),
      this.router.navigate(['companys'])
    })
   
  }








  // public title = 'Entreprises';
 
  // public company = {
  //   id: null,
  //   name: null,
  //   owner: null,
  //   date: null,
  //   phone: null,
  //   city: null,
  //   country: null,
  //   sector: null,
  // };

  // constructor(
  //   private companyService: CompanyService,
  //   private router: Router
  // ) {
  // }

  
  // onSubmit(company: Company): void {
  //   this.companyService.create({...company})
  //     .subscribe(() => this.router.navigate(['/companys']));
  // }

}
