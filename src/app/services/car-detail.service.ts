import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/entities/car';
import { CarDetail } from '../models/entities/carDetail';
import { ListResponseModel } from '../models/response/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44345/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetailsById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbyid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>> 
  {
    let newPath = this.apiUrl+"cars/getalldetail?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }


}
