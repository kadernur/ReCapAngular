import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/entities/color';

import { ListResponseModel } from '../models/response/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44345/api/';

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>
  {
  
    let newPath:string=this.apiUrl+"colors/getall"
      return this.httpClient.get<ListResponseModel<Color>>(newPath);

    }
  }
