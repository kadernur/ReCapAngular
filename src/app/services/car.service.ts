import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response/listResponseModel';
import { Car } from '../models/entities/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string  = 'https://localhost:44345/api/';
  
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath); 
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandIdandColorId(brandId:number, colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrandidandcolorid?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  
  }

