import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CompanyRoutingModule
  ],
  exports: [

  ]
})
export class CompanyModule { }
