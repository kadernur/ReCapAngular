import { CarImage } from "./carImage";

export interface Car{
  carId:number;
  brandName:string;
  colorName:string;
  modelYear:string;
  dailyPrice:number;
  descriptions:string;
  imagePath:string;
}