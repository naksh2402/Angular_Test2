import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate{

  constructor(private router:Router,private authService:AuthService) { }
  canActivate(): boolean{
      if(this.authService.isLoggedIn()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
