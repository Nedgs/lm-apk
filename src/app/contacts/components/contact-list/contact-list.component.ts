import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  displayedColumns : string[] = ['nom', 'email', 'telephone' , 'dateCrea', 'dateUp', 'cycle', 'action'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  contacts?: any;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getListContacts().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });

    this.refreshContacts();

  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  refreshContacts(){
    this.contactsService.getListContacts().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      });
  }

  deleteContact(id: number){
    let conf = confirm("Êtes vous sûrs ?");
    if (conf){
      this.contactsService.deleteItemById(id).subscribe(() => {
        console.log("Entreprise supprimé");
        this.refreshContacts();
      })
    }
  } 

}
