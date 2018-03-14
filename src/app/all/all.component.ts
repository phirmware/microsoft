import { Http } from '@angular/http';
import { Component, OnInit ,Output} from '@angular/core';
import { ProductComponent } from './../product/product.component';
import { Globals } from './../global';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  num:any;
  data:any;
  item:any;
  title:any;
  dataNum:any;
  getData:any;
  cart:any=[];
  firstRating:boolean;
  rating:any;
  constructor(private http:Http , private globals:Globals) {
    http.get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json').subscribe(response => {
      this.data = response.json();
    })
    this.cart = this.globals.role
  }

  ngOnInit(){
       this.getData = (value1,value)=> {
       this.num = value; 
       this.dataNum = value1;
       this.item = this.data[this.dataNum].subcategories[this.num].items;
       this.title= this.data[this.dataNum].subcategories[this.num].name;
    }

  }
  addToCart = (value) => {
       this.globals.role.push(value);
       console.log(this.globals.role);
   }

  

}