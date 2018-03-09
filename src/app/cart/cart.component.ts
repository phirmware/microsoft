import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { AllComponent } from './../all/all.component';
import { Globals } from './../global';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart:any;
   constructor(private globals:Globals) {
      this.cart = globals.role

   }

  ngOnInit() {}

  updatePrice(){
    
  }
}