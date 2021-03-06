import {ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Globals } from './../global';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http:Http , private global:Globals) { }
    name:any;
    price:any;
    imagelink:any;
    description:any;
    totalAmount:any;
    cart:any = [];

    ngOnInit() {
      this.route.paramMap
       .subscribe(params => {
      	this.name = params.get('item');
      	this.price = params.get('price');
      	this.totalAmount = this.price; 
      	this.imagelink = params.get('imagelink');
      	this.description = params.get('description');
      });
  }
     calcPrice (value) {
     	this.totalAmount = (this.price*value).toFixed(2); 
     }
     addToCart(){
       this.global.role.push({item:this.name,price:this.totalAmount,image:this.imagelink});
     }
}
