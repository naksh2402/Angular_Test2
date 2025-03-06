import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userRole = localStorage.getItem('role'); 
    if (userRole === 'admin') {
       // Admin access granted
      return true;
    }
    alert('Access Denied: Admins only!');
    this.router.navigate(['/customers']);
    return false;
  }
}
