import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

     
   constructor(public product:ProductComponent) {}

  ngOnInit() {
  }
     
}
