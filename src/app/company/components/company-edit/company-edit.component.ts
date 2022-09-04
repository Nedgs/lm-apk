import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/shared/models/city';
import { Company } from 'src/app/shared/models/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  currentCompany = new Company();
  cities! : City[];
  updatedCityId? : string;

  company: Company;
  city: string|null|undefined = '';

  constructor(private activateRoute: ActivatedRoute, private router: Router, private companyService: CompanyService) {
    this.company={
      id:0,
      name: '',
      phone: '',
    }
   }

  ngOnInit(): void {
    this.companyService.consultCompany(this.activateRoute.snapshot.params['id']).subscribe(
      comp =>{ this.currentCompany = comp;
      this.updatedCityId = this.currentCompany.city?.name;
     }
    );
  }

  updateCompany() {
    this.companyService.updateCompany(this.currentCompany,(this.updatedCityId)?.toString()).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/companys']);
    })
  
  }

}
