import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  signup(email:string,password:string,role:string):boolean{
    let users=JSON.parse(localStorage.getItem('users')||'[]');
   //user already exists
    if(users.find((user:any)=>{
      user.email===email
    })){
      return false;
    }
    users.push({email,password,role});
    localStorage.setItem('users',JSON.stringify(users));
    return true;
}
  login(email:string,password:string):boolean{
    let users=JSON.parse(localStorage.getItem('users')||'[]');
    // for loggin matchin the id and password with signup user
    let user=users.find((data:any)=>{
        data.email===email && data.password===password
    })

    if(!user){
      return false;
    }

    localStorage.setItem('token','user-token');
    localStorage.setItem('role',user.role);
    return true;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  isAdmin():boolean{
    return localStorage.getItem('role')==='admin';
  }
  isLoggedIn():boolean{
    return localStorage.getItem('token')?true:false;
  }
}
