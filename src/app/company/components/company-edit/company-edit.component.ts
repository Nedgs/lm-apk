import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/shared/models/city';
import { Company } from 'src/app/shared/models/company';
import { Country } from 'src/app/shared/models/country';
import { Sector } from 'src/app/shared/models/sector';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  currentCompany = new Company();
  cities! : City[];
  sectors! : Sector[];
  countries! : Country[];
  updatedCityId? : string;
  updatedSectorId? : number;
  updatedCountryId? : number;

  company: Company;
  city: string|null|undefined = '';
  sector: string|null|undefined = '';
  country: string|null|undefined = '';

  constructor(private activateRoute: ActivatedRoute, private router: Router, private companyService: CompanyService) {
    this.company={
      id:0,
      name: '',
      phone: '',
    }
   }

  ngOnInit(): void {

    this.companyService.listSectors().
    subscribe( sects => {
      this.sectors = sects;
      // console.log(sects);
    })

    this.companyService.listCountries().
    subscribe( count => {
      this.countries = count;
      // console.log(count);
    })

    this.companyService.consultCompany(this.activateRoute.snapshot.params['id']).subscribe(
      comp =>{ this.currentCompany = comp;
      this.updatedCityId = this.currentCompany.city?.name;
      this.updatedSectorId = this.currentCompany.sector?.id;
      this.updatedCountryId = this.currentCompany.city?.country?.id;
      console.log(this.currentCompany);
     }
     
    );
  }

  updateCompany() {
    this.currentCompany.sector = this.sectors.find(sec => sec.id == this.updatedSectorId)!;
    this.currentCompany.city!.country = this.countries.find(coun => coun.id == this.updatedCountryId)!;
    // this.currentCompany.sector? = this.sectors.find(sec => sec.id ==  this.updatedSectorId)!;
    this.companyService.updateCompany(this.currentCompany,(this.updatedCityId),(this.updatedSectorId),(this.updatedCountryId)?.toString()).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/companys']);
    })
  
  }

}
