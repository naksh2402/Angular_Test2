import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Customer, CustomerService } from '../CustomerForm/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Customer[]=[];
  constructor(public customerService:CustomerService,public authService:AuthService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data=>this.customers=data);
  }
  deleteCustomer(id:number){
  if(confirm("Are you sure you want to delete this customer?")){
    this.customerService.deleteCustomer(id).subscribe((data)=>{
      this.customers=this.customers.filter((item)=>item.id!==id);
    })
  }
}
}
