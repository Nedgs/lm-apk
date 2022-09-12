import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/login/services/auth.service';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  displayedColumns : string[] = ['nom', 'email','role', 'action'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  users?: any;
  constructor(private usersService: UsersService, public authService: AuthService) { }

  ngOnInit(): void {
    this.usersService.getListUsers().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;


    });

  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  refreshUsers(){
    this.usersService.getListUsers().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      });
  }

  deleteUser(id: number){
    let conf = confirm("Êtes vous sûrs ?");
    if (conf){
      this.usersService.deleteItemById(id).subscribe(() => {
        console.log("User supprimé");
        this.refreshUsers();
      })
    }
  } 

}
