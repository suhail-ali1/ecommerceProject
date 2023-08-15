import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCart().subscribe(products => {
      this.products = products;
    });

    console.log(this.products);
  }

}
