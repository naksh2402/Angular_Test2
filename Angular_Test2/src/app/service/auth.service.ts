import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  email: string;
  password: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'users';
  private tokenKey = 'token';
  private roleKey = 'role';

  constructor(private router: Router) {}

  signUp(email: string, password: string, role: 'admin' | 'user'): boolean {
    let users: User[] = JSON.parse(localStorage.getItem(this.usersKey) || '[]');

    // Prevent duplicate emails
    if (users.find(user => user.email === email)) {
      alert('Email is already registered.');
      return false;
    }

    // Save new user
    users.push({ email, password, role });
    localStorage.setItem(this.usersKey, JSON.stringify(users));

    alert('Signup successful! Please log in.');
    this.router.navigate(['/auth']);
    return true;
  }

  login(email: string, password: string): boolean {
    let users: User[] = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem(this.tokenKey, 'auth_token');
      localStorage.setItem(this.roleKey, user.role);
      this.router.navigate(['/customers']);
      return true;
    }

    alert('Invalid email or password!');
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.router.navigate(['/auth']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  isAdmin(): boolean {
    return localStorage.getItem(this.roleKey) === 'admin';
  }
}
