import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.gaurd';
import { AdminGuard } from './auth/admin.gaurd';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { FormComponent } from './component/CustomerForm/form.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent }, 
  { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
  { path: 'add-customer', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'edit-customer/:id', component: FormComponent, canActivate: [AuthGuard] }, 
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
