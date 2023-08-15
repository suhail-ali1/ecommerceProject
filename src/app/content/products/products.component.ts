import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

  // products = [
  //   { title: 'Iphone 12 pro', description: 'Amazing Iphone 12 ', price: 50000 , image : 'assets/apple.jpg' },
  //   { title: 'Samsung M33 ', description: 'Samsung 5G Phone ', price: 20000 , image : 'assets/samsung.jpg' },
  //   { title: 'Nokia 3310', description: 'Vintage Nokia Phone ', price: 3000 , image : 'assets/nokia.jpg'  },
  //   { title: 'lava', description: 'Amazing lava Phone ', price: 15000 , image : 'assets/lava.jpg'  },
  //   { title: 'Realme ', description: 'Realme Nokia Phone ', price: 3000 , image : 'assets/realme.jpg'  },
  //   { title: 'Remdi Note 10', description: 'Remdi PhonePhone ', price: 3000 , image : 'assets/remdi.jpg'  },
   

  // ];

  products = [];
  productToUpdate: any ;
  isUpdateWindowOpen: boolean = false;
  title : string ;
  desc : string;
  price : number ;
  
  constructor(private dataService: DataService , private router : Router) { }
  

  ngOnInit() {
    this.dataService.getProducts().subscribe(products => {
      this.products = products;
    });

    console.log(this.products);
  }
   
  async addtocart(product : any) 
  { 
      console.log(product);
       
      try {
        await this.dataService.addToCart(product);
        console.log('Item added to cart');
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
  }


  async openUpdateWindow(product: any) {
    try {
      this.productToUpdate = await this.dataService.getProduct(product.id);
      console.log(this.productToUpdate);
      this.isUpdateWindowOpen = true;
    } catch (error) {
      console.error('Error loading product:', error);
    }
  }

  async updateProduct() {
    try {
      console.log(this.productToUpdate);
      this.productToUpdate.title = this.title ;
      this.productToUpdate.description = this.desc ;
      this.productToUpdate.price = this.price ;
      await this.dataService.updateProduct(this.productToUpdate);
      console.log('Product updated');
      this.isUpdateWindowOpen = false;
      console.log(this.productToUpdate);
      this.router.navigate(['product']);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }
}
