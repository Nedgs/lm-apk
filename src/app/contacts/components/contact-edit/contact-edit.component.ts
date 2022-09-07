import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/shared/models/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  currentContact = new Contact();

  contact: Contact;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private contactService: ContactsService) {
    this.contact = {
      id:0,
      name:'',
      email:'',
      phone:'',
    }
  }

  ngOnInit(): void {
    this.contactService.consultContact(this.activateRoute.snapshot.params['id']).subscribe(
      cont => {
        this.currentContact = cont;
      }
    )
  }

  updateContact() {
    this.contactService.updateContact(this.currentContact).subscribe(result => {
      console.log(result);
      this.router.navigate(['/contacts']);
    })
  }

}
