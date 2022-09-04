import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';

const routes: Routes = [
  {path: '', component: CompanyListComponent},
  {path: 'add', component: CompanyAddComponent},
  {path: 'update/:id', component:CompanyEditComponent}
  

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
