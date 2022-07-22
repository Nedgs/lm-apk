import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CompanyListComponent, CompanyFormComponent, CompanyAddComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CompanyRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [

  ]
})
export class CompanyModule { }
