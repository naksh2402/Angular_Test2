import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormComponent } from './component/CustomerForm/form.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { SignupComponent } from './component/signup/signup.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
// import {InmemoryDataService} from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InmemoryDataService,{dataEncapsulation:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
