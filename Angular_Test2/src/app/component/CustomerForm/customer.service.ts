import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Customer{
    id:number;
    name:string;
    email:string,
    phone:string,
    address:string
}
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl='api/customers';

  constructor(private http:HttpClient) { }
  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl);
  }
  getCustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }
  addCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl,customer);
  }
  // api/id/name
  updateCustomer(customer:Customer):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${customer.id}`,customer);
  }
  deleteCustomer(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}