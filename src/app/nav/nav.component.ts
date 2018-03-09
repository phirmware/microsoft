import { Component, OnInit } from '@angular/core';
import { Globals } from './../global';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    cart:any = [];
  constructor(private global:Globals) { 
    this.cart = global.role
  }

  ngOnInit() {
  }


}
