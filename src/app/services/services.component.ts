import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  openside=true;
  contentMargin = 240;
  constructor() { }

  ngOnInit(): void {
  }
  toggleopen(){
    this.openside = !this.openside;
    if(!this.openside){
      this.contentMargin = 70;
    }else{
      this.contentMargin = 240;
    }
  }

}
