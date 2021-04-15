import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClient } from '@angular/common/http';
import { CarDetailComponent } from './components/car-detail/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import {FormsModule} from "@angular/forms";
import { CarImageComponent } from './components/carImage/car-image/car-image.component';

import{BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ToastrModule} from "ngx-toastr"
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    CarFilterComponent,
    FilterPipePipe,
    VatAddedPipe,
    CarImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({

      positionClass:"toast-bottom-right"


    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
