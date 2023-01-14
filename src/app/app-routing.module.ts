import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './header/logout/logout.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { SssComponent } from './sss/sss.component';
import { KoclukComponent } from './products/kocluk/kocluk.component';
import { EKitapComponent } from './products/e-kitap/e-kitap.component';
import { EgitimComponent } from './products/egitim/egitim.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'sık-sorulan-sorular', component: SssComponent },
  { path: 'kocluk', component: KoclukComponent},
  { path: 'e-kitap', component: EKitapComponent },
  { path: 'egitimler', component: EgitimComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
