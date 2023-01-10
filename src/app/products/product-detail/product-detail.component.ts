import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { IProducts } from 'src/app/Models/IProducts';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  pValue: number = 0;
  constructor(private products: ProductsComponent,
              private activatedRoute: ActivatedRoute) { }

 getProductById(id: number): IProduct { return this.products.find(i => i.id == id); }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(param=> {
    //   this.pValue = param["id"];
    //   this.products.getProductById(param["id"]).subscribe((data: IProduct) => {
    //     this.product = data;
    //   })
    // });
  }
}

