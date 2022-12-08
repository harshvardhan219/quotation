import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message: string;

  constructor(private http : HttpClient) { }

  setData(data) {
    this.message = data
  }

  getData(){
    return this.message
  }

  getSearchProductName(name:String){
    const response = new Promise(resolve => {
      this.http.get(environment.apiURL+`${name}`).subscribe( data => {
        resolve(data)
      }, err => {
        console.log(err)
      });
    });
    return response;
  }
}
