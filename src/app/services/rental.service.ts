import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/entities/rental';
import { ListResponseModel } from '../models/response/listResponseModel';
import { ResponseModel } from '../models/response/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44345/api/';
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{

    let newPath=this.apiUrl + "rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  addRental(rent: Rental): Observable<ResponseModel> {
    let path = this.apiUrl+"rentals/add";
    return this.httpClient.post<ResponseModel>(path,rent);
  }
  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>
  {
    let newPath=this.apiUrl+"getrentaldetailsbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

}
