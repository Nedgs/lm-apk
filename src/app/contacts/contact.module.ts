import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';


@NgModule({
  declarations: [ContactListComponent, ContactAddComponent, ContactEditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ContactRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
    
    

  ]
})
export class ContactModule { }
