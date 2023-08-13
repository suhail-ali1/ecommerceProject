import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ProductsComponent
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
