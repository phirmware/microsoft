import { Component, OnInit } from '@angular/core';
import { Globals } from './../global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  cart:any = [];
  constructor(private global:Globals) {
     this.cart = global.role
   }

  ngOnInit() {
  }

}
