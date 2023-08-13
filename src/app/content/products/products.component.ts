import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    { title: 'Iphone 12 pro', description: 'Amazing Iphone 12 ', price: 50000 , image : 'assets/apple.jpg' },
    { title: 'Samsung M33 ', description: 'Samsung 5G Phone ', price: 20000 , image : 'assets/samsung.jpg' },
    { title: 'Nokia 3310', description: 'Vintage Nokia Phone ', price: 3000 , image : 'assets/nokia.jpg'  },
    { title: 'lava', description: 'Amazing lava Phone ', price: 15000 , image : 'assets/lava.jpg'  },
    { title: 'Realme ', description: 'Realme Nokia Phone ', price: 3000 , image : 'assets/realme.jpg'  },
    { title: 'Remdi Note 10', description: 'Remdi PhonePhone ', price: 3000 , image : 'assets/remdi.jpg'  },
   

  ];

}
