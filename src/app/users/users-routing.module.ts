import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersGuard } from '../users.guard';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsertwoGuard } from '../usertwo.guard';

const routes: Routes = [
  {path: '', component: UsersListComponent, canActivate:[UsersGuard]},
  {path: 'add', component: UserAddComponent, canActivate:[UsertwoGuard]},
  {path: 'update/:id', component: UserEditComponent, canActivate:[UsertwoGuard]}
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
