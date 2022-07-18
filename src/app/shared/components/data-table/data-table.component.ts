import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-data-table',
  templateUrl:'./data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent  {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: string[] = [];



  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

}
