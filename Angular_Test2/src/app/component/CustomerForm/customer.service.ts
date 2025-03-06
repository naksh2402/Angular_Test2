import { Injectable } from '@angular/core';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private localStorageKey = 'customers';

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      const initialData: Customer[] = [
        { id: 1, name: 'naksh', email: 'naksh@gmail.com', phone: '7854567890', address: 'New Delhi' },
        { id: 2, name: 'yash', email: 'yash@yahoo.com', phone: '0987654321', address: 'Hyderabad' },
        { id: 3, name: 'sachin', email: 'sachin@gmail.com', phone: '7894527890', address: 'Mumbai' },
      ];
      localStorage.setItem(this.localStorageKey, JSON.stringify(initialData));
    }
  }

  getCustomers(): Customer[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  getCustomer(id: number): Customer | undefined {
    const customers = this.getCustomers();
    return customers.find(c => c.id === id);
  }

  addCustomer(customer: Customer): void {
    const customers = this.getCustomers();
    customer.id = this.generateId(customers);
    customers.push(customer);
    localStorage.setItem(this.localStorageKey, JSON.stringify(customers));
  }

  updateCustomer(updatedCustomer: Customer): void {
    let customers = this.getCustomers();
    customers = customers.map(c => (c.id === updatedCustomer.id ? updatedCustomer : c));
    localStorage.setItem(this.localStorageKey, JSON.stringify(customers));
  }

  deleteCustomer(id: number): void {
    let customers = this.getCustomers();
    customers = customers.filter(c => c.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(customers));
  }

  private generateId(customers: Customer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1;
  }
}
