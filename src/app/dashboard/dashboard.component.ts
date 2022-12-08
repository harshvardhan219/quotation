import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data : any;

  constructor(private dialogRef : MatDialog, private shared: SharedService) { }

  openDialogue($event : Event){
    $event.preventDefault()
    
    this.dialogRef.open(ModalComponent)
  }

  ngOnInit(): void {
  }

  getSearchData(searchData : any) {
    const keyw = searchData.target.value;
    const search = this.shared.getSearchProductName(keyw).then(response => {
      this.data = response
      console.log(this.data)
    })
  }
}
