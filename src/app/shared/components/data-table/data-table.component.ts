import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th scope="col" *ngFor="let displayedColumn of displayedColumns">{{ displayedColumn }}</th>
      </tr>
      </thead>
      <tbody>
      <ng-content></ng-content>
      </tbody>
    </table>
  `,
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent  {

  @Input() displayedColumns: string[] = [];

}
