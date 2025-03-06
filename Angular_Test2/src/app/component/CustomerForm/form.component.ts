import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerService } from './customer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
customer:Customer={id:0,name:"",email:"",phone:"",address:""}
isEditMode=false;

constructor( private customerService:CustomerService,
  private router:Router,
  private route:ActivatedRoute){}
ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    if(id){
      this.isEditMode=true;
      this.customerService.getCustomer(+id).subscribe((data)=>{
        this.customer=data;
      })
    }
 }
  onsubmit(form:any){
    if(this.isEditMode){
      this.customerService.updateCustomer(this.customer).subscribe((data)=>{
        this.router.navigate(['customers']);
      })
    }
      else{
         this.customerService.addCustomer(this.customer).subscribe((data)=>{
        this.router.navigate(['customers']);
      })
  } 
}
}