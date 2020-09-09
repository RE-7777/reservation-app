import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any 
  

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    const productsObservable=this.productservice.getProducts();
    productsObservable.subscribe(
      (data) => { 
        this.products=data;
        console.log('got value '+data)
        // debugger
      },
      // (err) => { console.error('something wrong occurred ' + err) },
      // () => { console.log('done') }
    )
    
    



  }

}
