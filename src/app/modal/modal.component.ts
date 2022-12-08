
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  Naam;
  constructor(private shared: SharedService ) {  
  }

  

  ngOnInit(): void {
    this.Naam = this.shared.getData() 
  }

}
