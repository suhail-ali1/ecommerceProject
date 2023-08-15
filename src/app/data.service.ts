import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private api = 'http://localhost:3000';

  private cart = 'http://localhost:3000/cart';

  private update = 'http://localhost:3000/products';



  constructor(private http: HttpClient) { }

  getProducts() {

    return this.http.get<any[]>(`${this.api}/products`);
  }

  addToCart(product: any): Promise<any> {
    return this.http.post(this.cart, product).toPromise();
  }


  getCart()
  {
    return this.http.get<any[]>(`${this.api}/cart`);
  }

  updateProduct(product: any): Promise<any> {
    console.log(product.id);
    return this.http.put(`${this.update}/${product.id}`, product).toPromise();
  }

  getProduct(productId: number): Promise<any> {
    return this.http.get(`${this.update}/${productId}`).toPromise();
  }

}
