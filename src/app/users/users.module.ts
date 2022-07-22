import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
