import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/shared/models/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  displayedColumns : string[] = ['entreprise', 'date', 'telephone', 'ville', 'pays', 'secteur', 'action'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  companys?: any;

  constructor(private companysService: CompanyService) { }

  ngOnInit(): void {
    this.companysService.getListCompanys().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      // console.log(response);


    });

    this.refreshCompanys();

  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value;
  }

  refreshCompanys(){
    this.companysService.getListCompanys().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      });
  }

  deleteCompany(id: number){
    let conf = confirm("Êtes vous sûrs ?");
    if (conf){
      this.companysService.deleteItemById(id).subscribe(() => {
        console.log("Entreprise supprimé");
        this.refreshCompanys();
      })
    }
  } 
}
