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
  EditProductsModal,
  ProductsComponent,
} from './products/products.component';
import { MainComponent } from './main/main.component';
import {
  EditEmployeeModal,
  EmployeesComponent,
} from './employees/employees.component'
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IntroComponent } from './main/intro/intro.component';
import { SliderComponent } from './main/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetMessagesComponent } from './get-messages/get-messages.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SummaryPipe } from './pipe/summary.pipe';

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
    EmployeesComponent,
    ContactUsComponent,
    IntroComponent,
    SliderComponent,
    EditProductsModal,
    EditEmployeeModal,
    GetMessagesComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  
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
