import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../CustomerForm/customer.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(public customerService: CustomerService, public authService: AuthService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

  deleteCustomer(id: number) {
  if (!this.authService.isAdmin()) {
    alert('Only admins can delete customers!');
    return;
  }

  if (confirm('Are you sure you want to delete this customer?')) {
    this.customerService.deleteCustomer(id);
    this.customers = this.customers.filter(item => item.id !== id);
  }
}
}
