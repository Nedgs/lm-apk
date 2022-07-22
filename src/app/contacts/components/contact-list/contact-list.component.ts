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

  displayedColumns : string[] = ['nom', 'email', 'telephone' ,'proprietaire', 'entreprise', 'date', 'cyclevie', 'action'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getListContacts().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;


    });

  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

}
