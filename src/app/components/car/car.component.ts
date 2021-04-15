import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/entities/brand';
import { Car } from 'src/app/models/entities/car';
import { CarImage } from 'src/app/models/entities/carImage';
import { Color } from 'src/app/models/entities/color';
import { BrandService } from 'src/app/services/brand.service';



import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  colors: Color[];
  brands: Brand[];
  carImage: CarImage;
  dataLoaded = false;
  filterText="";

  
  brandId: number;
  colorId: number;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarDetailsByBrandIdandColorId(
          params['brandId'],
          params['colorId']
        );
      } else if (params['brandId']) {
        console.log("brand çalıştı")
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCarDetails();
        this.getColors();
        this.getBrands();
      }
    });
  }

  getCarDetailsByBrandIdandColorId(brandId: number, colorId: number) {
    this.carService
      .getCarsByBrandIdandColorId(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getColors() {
    this.colorService
      .getColors()
      .subscribe((Response) => (this.colors = Response.data));
  }

  getBrands() {
    this.brandService
      .getBrands()
      .subscribe((Response) => (this.brands = Response.data));
  }

  getCarDetails() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(car:Car)
  {

    this.toastrService.success("Kiralandı",car.brandName)

  }
}
