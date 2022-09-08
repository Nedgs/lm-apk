import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Contact } from "src/app/shared/models/contact";
import { Lifecycle } from "src/app/shared/models/lifecycle";
import { ContactsService } from "../../services/contacts.service";

@Component({
  selector: "app-contact-add",
  templateUrl: "./contact-add.component.html",
  styleUrls: ["./contact-add.component.scss"],
})
export class ContactAddComponent implements OnInit {
  addContactForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(13),
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(13),
    ]),
    lifecycle: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(13),
    ]),
  });

  contact: Contact;
  lifecycle: string | null | undefined = '';
  lifecycles!: Lifecycle[];

  constructor(private contactService: ContactsService, private router: Router) {
    this.contact = {
      id: 0,
      name: "",
      email: "",
      phone: "",
    };
  }

  retrieveContactInfosFromForm() {
    this.contact.name = this.addContactForm.value.name?.toString();
    this.contact.email = this.addContactForm.value.email?.toString();
    this.contact.phone = this.addContactForm.value.phone?.toString();
    this.lifecycle = (this.addContactForm.value.lifecycle)?.toString();

  }

  ngOnInit(): void {
    this.contactService.listLifecycles().
      subscribe(lifec => {
        this.lifecycles = lifec;
        console.log(lifec)
      })
  }

  addContact() {
    this.retrieveContactInfosFromForm();
    this.contactService.addContact(this.contact, (this.lifecycle)?.toString()).subscribe((result) => {
      console.log(result);
      this.router.navigate(["/contacts"]);
    });
  }
}
