import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ContactComponent } from './content/contact/contact.component';
import { ProductsComponent } from './content/products/products.component';
import { CartComponent } from './content/cart/cart.component';

const routes: Routes = [
  {path : '' , component : HomeComponent } ,
  {path : 'home' , component : HomeComponent  } ,
  {path : 'contact' , component : ContactComponent} ,
  {path : 'product' , component : ProductsComponent } , 
  {path : 'cart' , component : CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
