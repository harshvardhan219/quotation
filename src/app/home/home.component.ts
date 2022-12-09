import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numbers: number[];

  constructor() {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
   }

  getQuotation(){

    

  }


  ngOnInit(): void {
  }

}
