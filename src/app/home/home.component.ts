import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numbers: number[];

  constructor(private shared: SharedService,private http: HttpClient, private router: Router) {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
   }

  async getQuotation(){
    await this.http.post('https://backend.spdash.in/quotation/create/draft/satvik@hnh.com', "").subscribe(
      (response) => {console.log(response);this.shared.setid(response); this.router.navigateByUrl('dashboard')},
      (error) => console.log(error))
  }


  ngOnInit(): void {
  }

}
