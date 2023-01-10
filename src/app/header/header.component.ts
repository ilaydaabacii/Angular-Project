import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { IProduct } from '../Models/IProduct';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends AppComponent {
  product:IProduct;
}
