import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/entities/carImage';
import { ListResponseModel } from '../models/response/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
apiUrl="https://localhost:44345/api/"
  constructor(private httpClient :HttpClient) { }

  getCarImagesById(id:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getimagesbycarid?CarId="+id
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }



}
