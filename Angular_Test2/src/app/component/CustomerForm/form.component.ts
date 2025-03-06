import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService, Customer } from '../CustomerForm/customer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  customer: Customer = { id: 0, name: "", email: "", phone: "", address: "" };
  isEditMode = false;

  constructor(public customerService: CustomerService, public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      const existingCustomer = this.customerService.getCustomer(+id);
      if (existingCustomer) {
        this.customer = existingCustomer;
      }
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.customerService.updateCustomer(this.customer);
    } else {
      this.customerService.addCustomer(this.customer);
    }
    this.router.navigate(['/customers']);
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }
}
