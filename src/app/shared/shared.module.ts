import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    DataTableComponent
  ]
})
export class SharedModule { }
