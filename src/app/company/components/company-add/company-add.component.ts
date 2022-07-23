import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import {Router} from '@angular/router';
import { Company } from 'src/app/shared/models/company';

@Component({
  selector: 'app-company-add',
  template: `
    <section [title]="title">

      <div class="container">
        <app-company-form (submitted)="onSubmit($event)"></app-company-form>
      </div>

    </section>
  `,
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent {

  public title = 'Entreprises';
 
  public company = {
    id: null,
    name: null,
    owner: null,
    date: null,
    phone: null,
    city: null,
    country: null,
    sector: null,
  };

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) {
  }

  
  onSubmit(company: Company): void {
    this.companyService.create({...company})
      .subscribe(() => this.router.navigate(['/companys']));
  }

}
