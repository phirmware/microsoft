import { Component, OnInit } from '@angular/core';
import { Globals } from './../global';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    cart = this.global.role;
    isEmpty:boolean;
    
  constructor(private global:Globals) {}
  

  ngOnInit() {}
} 