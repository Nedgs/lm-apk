import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAddComponent } from './components/company-add/company-add.component';

const routes: Routes = [
  {path: '', component: CompanyListComponent},
  {path: 'add', component: CompanyAddComponent}
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
