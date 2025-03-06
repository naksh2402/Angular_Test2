import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email:string='';
  password:string='';
  role:string='user';

  constructor(private router:Router,private authService:AuthService){}

  signup(){
    if(this.authService.signup(this.email,this.password,this.role)){
      alert("User Created successfully");
      this.router.navigate(['/login']);
    }else{
      alert("User already exists");
    }
  }
}
