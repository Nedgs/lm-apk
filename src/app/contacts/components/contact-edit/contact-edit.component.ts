import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CompanyService } from "src/app/company/services/company.service";
import { Company } from "src/app/shared/models/company";
import { Contact } from "src/app/shared/models/contact";
import { Lifecycle } from "src/app/shared/models/lifecycle";
import { ContactsService } from "../../services/contacts.service";

@Component({
  selector: "app-contact-edit",
  templateUrl: "./contact-edit.component.html",
  styleUrls: ["./contact-edit.component.scss"],
})
export class ContactEditComponent implements OnInit {
  currentContact = new Contact();

  contact: Contact;
  lifecycles!: Lifecycle[];
  updatedLifecyclesId?: number;
  lifecycle: string | null | undefined = "";

  companys!: Company[];
  updatedCompanyId?: number;
  company: string | null | undefined = "";

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private contactService: ContactsService,
    private companyService: CompanyService
  ) {
    this.contact = {
      id: 0,
      name: "",
      email: "",
      phone: "",
    };
  }

  ngOnInit(): void {
    this.contactService.listLifecycles().subscribe((lifec) => {
      this.lifecycles = lifec;
      console.log(lifec);
    });

    this.companyService.listCompanyfor().subscribe((comp) => {
      this.companys = comp;
      console.log(comp);
    });

    this.contactService
      .consultContact(this.activateRoute.snapshot.params["id"])
      .subscribe((cont) => {
        this.currentContact = cont;
        this.updatedLifecyclesId = this.currentContact.lifecycle?.id;
        this.updatedCompanyId = this.currentContact.company?.id;
        
      });
  }

  updateContact() {
    this.currentContact.lifecycle = this.lifecycles.find((lifec) => lifec.id == this.updatedLifecyclesId)!;
    this.currentContact.company = this.companys.find((comp) => comp.id == this.updatedCompanyId)!;


    this.contactService.updateContact(this.currentContact, (this.updatedLifecyclesId), (this.updatedCompanyId)?.toString()).subscribe((result) => {
        console.log(result);
        this.router.navigate(["/contacts"]);
      });
  }
}
