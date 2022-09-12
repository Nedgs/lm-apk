import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserAddComponent } from './components/user-add/user-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './components/user-edit/user-edit.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersModule { }
