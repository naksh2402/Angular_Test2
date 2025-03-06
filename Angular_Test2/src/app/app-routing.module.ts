import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { FormComponent } from './component/form/form.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:"/details",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:CustomerDetailsComponent},
  {path:'customers',component:CustomerListComponent},
  {path:'customer/new',component:FormComponent},
  {path:'customer/edit/:id',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
