import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/entities/brand';
import { Customer } from '../models/entities/customer';

import { ListResponseModel } from '../models/response/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44345/api/';


  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>
  {
    let newPath=this.apiUrl+"customers/getcustomerdetails"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
