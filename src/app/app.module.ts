import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './header/logout/logout.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  NgModel,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  ProductsComponent,
} from './products/products.component';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { SummaryPipe } from './pipe/summary.pipe';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { AboutUsComponent } from './about-us/about-us.component';
import { SortByPipe } from './pipe/sortby.pipe';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SssComponent } from './sss/sss.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { KoclukComponent } from './products/kocluk/kocluk.component';
import { EKitapComponent } from './products/e-kitap/e-kitap.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    MainComponent,
    ContactUsComponent,
    SummaryPipe,
    AboutUsComponent,
    SortByPipe,
    ProductDetailComponent,
    FilterPipe,
    SssComponent,
    KoclukComponent,
    EKitapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgsRevealModule,
    NgxPaginationModule,
    OrderModule,
    FilterPipeModule,
    FormsModule,
   
  
    ToastrModule.forRoot({
      progressBar: true,
      progressAnimation: 'increasing',
    }),
    NgbModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
