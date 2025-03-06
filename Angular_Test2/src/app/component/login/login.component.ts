import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // may have to check fore type errors
  email:string ='';
  password:string='';

  constructor(private authService:AuthService,private router:Router){}

  login(){
    if(this.authService.login(this.email,this.password)){
      alert("Logged in successfully");
      this.router.navigate(['/dashboard']);
    }else{
      alert("Invalid credentials");
    }
  }

}
