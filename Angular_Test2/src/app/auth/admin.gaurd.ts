import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmin implements CanActivate{

  constructor(private router:Router,private authService:AuthService) { }
  canActivate(): boolean{
      if(this.authService.isAdmin()){
        return true;
      }
      this.router.navigate(['/dashboard']);
      return false;
  }
}
