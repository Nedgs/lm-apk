import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/shared/models/role';
import { RoleToUserForm } from 'src/app/shared/models/RoleToUserForm';
import { User } from 'src/app/shared/models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  addUserForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(13),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(13),
    ]),
    role: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(13),
    ])
    
  });

  user: User;
  form: RoleToUserForm | undefined;
  role: string | null | undefined = "";
  roles!: Role[];
 

  constructor(private userService: UsersService, private router: Router) {
    this.user = {
      id:0,
      username: "",
      email: "",
      password: "",
      roles:[]
    }
   }

   retrieveUserInfosFromForm() {
    this.user.username = this.addUserForm.value.username?.toString();
    this.user.email = this.addUserForm.value.email?.toString();
    this.user.password = this.addUserForm.value.password?.toString();
    
    this.role = this.addUserForm.value.role?.toString();
    console.log(this.role);
  }

  ngOnInit(): void {
    this.userService.rolesList().subscribe((rol) => {
      this.roles = rol;
      console.log(rol);
    });
  }

  addUser() {
    this.retrieveUserInfosFromForm();
    console.log(this.addUserForm);
    const role: RoleToUserForm= {username: this.user.username, roleName:this.addUserForm.value.role ? this.addUserForm.value.role.toString() : 'USER'};
    this.userService.addUser(this.user).subscribe((result) => {
        console.log(result);
        this.userService.addRoleToUser(role).subscribe((res => {
          console.log(res);
        }));
        this.router.navigate(["/users"]);
      });
  }

  // addRole() {
  //   this.retrieveUserInfosFromForm();
  //   this.role = this.addUserForm.value.role?.toString();
  //   // this.form?.roleName = this.user.roles;
    
  //   // this.userService.addRoleToUser(this.user.username).subscribe((res) => {
  //   //   console.log(res);
  //   // });
  // }
 
}
