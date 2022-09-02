import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Company } from 'src/app/shared/models/company';  
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  // @Input() init: Company = {
  //   id: null,
  //   name: null,
  //   owner: null,
  //   date: null,
  //   phone: null,
  //   city: null,
  //   country: null,
  //   sector: null,
  // };

  @Output() submitted: EventEmitter<Company> = new EventEmitter<Company>();
  // public states = Object.values(ClientStateEnum);

  public form: FormGroup | null = null;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   id: [this.init.id],
    //   name: [this.init.name],
    //   owner: [this.init.owner],
    //   date: [this.init.date],
    //   phone: [this.init.phone],
    //   city: [this.init.city],
    //   country: [this.init.country],
    //   sector: [this.init.country],
    // });
  }

  // public onSubmit(): void {
  //   this.submitted.emit(this.form?.value);
  // }

}
