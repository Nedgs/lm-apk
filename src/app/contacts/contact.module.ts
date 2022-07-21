import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';


@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ContactRoutingModule,
    
    

  ]
})
export class ContactModule { }
