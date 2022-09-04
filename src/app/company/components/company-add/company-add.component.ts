import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import {Router} from '@angular/router';
import { Company } from 'src/app/shared/models/company';
import { City } from 'src/app/shared/models/city';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-add',
  templateUrl: 'company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  addCompanyForm= new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(13),]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(13),]),
  });

  company: Company;
  city: string|null|undefined = '';

  constructor(private companysService: CompanyService, private router: Router) {
    this.company={
      id:0,
      name: '',
      phone: '',
    }
  }

  retrieveCompanyInfosFromForm(){
    this.company.name = (this.addCompanyForm.value.name)?.toString();
    this.company.phone = (this.addCompanyForm.value.phone)?.toString();
    this.city = (this.addCompanyForm.value.city)?.toString();
  }

  ngOnInit(): void {
  }

  addCompany(){
    this.retrieveCompanyInfosFromForm();
    this.companysService.addCompany(this.company,(this.city)?.toString()).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/companys']);
    })
  }

  }


