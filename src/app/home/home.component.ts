import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     data:any[];
     constructor(private http:Http){
          
     }
      ngOnInit(){
      	this.http.get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json').subscribe(response => {
              this.data = response.json();
          })
      }
     
}
