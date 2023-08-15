import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ] 
  ,
  exports : [
    HomeComponent ,
    ContactComponent
  ]
})
export class ContentModule { }
