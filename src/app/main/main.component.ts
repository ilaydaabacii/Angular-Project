import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { IProduct } from '../Models/IProduct';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends ProductsComponent  {

  product: IProduct
  }

;

