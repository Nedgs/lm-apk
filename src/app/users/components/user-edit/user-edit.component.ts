import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/shared/models/role';
import { RoleToUserForm } from 'src/app/shared/models/RoleToUserForm';
import { User } from 'src/app/shared/models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  currentUser = new User();
  user: User;
  form: RoleToUserForm | undefined;
  role: string | null | undefined = "";
  roles!: Role[];
  updatedRoleId?: number;

  constructor(private userService: UsersService, private router: Router,private activateRoute: ActivatedRoute) {
    this.user = {
      id:0,
      username: "",
      email: "",
      password: "",
      roles:[]
    }
   }

  ngOnInit(): void {
    this.userService.rolesList().subscribe((rol) => {
      this.roles = rol;
      console.log(rol);
    });

    this.userService
      .consultUser(this.activateRoute.snapshot.params["id"])
      .subscribe((cont) => {
        this.currentUser = cont;
        // this.updatedRoleId = this.currentUser.roles?.id
        // this.updatedLifecyclesId = this.currentContact.lifecycle?.id;
        // this.updatedCompanyId = this.currentContact.company?.id;
        
      });
  }

  updateUser() {

    this.userService.updateUser(this.currentUser).subscribe((result) => {
        console.log(result);
        this.router.navigate(["/users"]);
      });
  }

}
