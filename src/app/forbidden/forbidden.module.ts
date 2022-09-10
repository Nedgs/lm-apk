import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './components/forbidden.component';
import { MaterialModule } from '../shared/material/material.module';
import { ForbiddenRoutingModule } from './forbidden-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ForbiddenComponent],
  exports: [ForbiddenComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ForbiddenRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ForbiddenModule { }
